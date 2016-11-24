const express = require('express');
const router = express.Router();
const moment = require('moment');

const db = require('../database');


// moment settings
moment.locale('ru');
moment.updateLocale('ru', {
  longDateFormat: {
    LL : 'D MMMM YYYY',
  }
});


class Calendar{
  constructor(settings){

    if(settings){
      this.now = moment(settings.date) || moment();
      this.path = settings.path;
      this.eventsData = db[this.path].calendarEvents;

      if (this.path === 'mobile') {
        const corpArr = db['corp'].calendarEvents;
        const weddingArr = db['wedding'].calendarEvents;
        this.eventsData = [].concat(corpArr, weddingArr);
      }

    } else {
      this.now = moment();
    }

    this.calendarHead = this.now.clone().format('MMMM/YYYY');
    this.prevMonth = this.now.clone().subtract(1, 'month').format('YYYY-MM-DD');
    this.nextMonth = this.now.clone().add(1, 'month').format('YYYY-MM-DD');

    this.format = 'LL'
    this.firstDayOfMonth = this.now.clone().startOf('month');
    this.lastDayOfMonth = this.now.clone().endOf('month');

    this.firstDayOfFirstWeek = this.firstDayOfMonth.clone().startOf('week');
    this.lastDayOfFirstWeek = this.firstDayOfMonth.clone().endOf('week');

    this.firstDayOfLastWeek = this.lastDayOfMonth.clone().startOf('week');
    this.lastDayOfLastWeek = this.lastDayOfMonth.clone().endOf('week');

    this.dates = [];
    this.calendarData = {};

    this.generateDates();
  }

  generateDates(){
    let cursor = this.firstDayOfFirstWeek.clone();

    while(!cursor.isSame(this.lastDayOfLastWeek.clone().add(1, 'day'), 'day')){

      // console.log(cursor.format(this.format),
      //   this.lastDayOfLastWeek.format(this.format),
      //   cursor.isSame(this.lastDayOfLastWeek, 'day')
      // );

      this.dates.push(cursor.clone());

      cursor.add(1, 'days');

    }
    this.createWeeks(this.dates);
  }

  createWeeks(dates){
    let isWeekend, isToday, isPass, isFuture, isThisMonth, isEventToday,
      reserved;
    const now = this.now.clone();
    const today = moment();
    let weekIndex = 1;

    this.calendarData.weeks = {};
    this.calendarData.weeks[weekIndex] = {};
    this.calendarData.weeks[weekIndex].days = {};

    dates.forEach((day, index) => {
      index++;

      // create additional props
      if(+day.format('E') === 6 || +day.format('E') === 7) {
        isWeekend = true;
      } else {
        isWeekend = false;
      };

      isEventToday = this.isEventToday(day);
      reserved = isEventToday? 'reserved' : '';
      isToday = day.isSame(today, 'day') ? true : false;
      isThisMonth = day.isSame(now, 'month') ? true : false;
      isFuture = day.isAfter(today, 'day') ? true : false;

      this.calendarData.weeks[weekIndex].days[index] = {
        dateNum: day.format('D'),
        date: day.format(this.format),
        dayOfWeek: day.format('E'),
        isWeekend,
        isToday,
        isFuture,
        isThisMonth,
        isEventToday,
        reserved
      }

      if(index % 7 === 0){
        weekIndex++;
        index = 1;
        this.calendarData.weeks[weekIndex] = {};
        this.calendarData.weeks[weekIndex].days = {};
      }
    });

    // console.log(this.calendarData.weeks[2]);
  }

  isEventToday(today){
    let returnData;
    const path = this.path;
    this.eventsData.forEach(event => {
      const eventDate = moment(event.date, "DD-MM-YYYY");

      if(eventDate.isSame(today, 'day')){

        returnData = {
          eventDate: event.date,
          eventName: event.name,
          eventType: this.path === 'corp' ? 'Корпоратив' : 'Свадьба'
        };
      }
    });
    return returnData || false;
  }
}


router.get('/', (req, res, next) => {
  calendar = new Calendar();
  res.render('calendar', {calendar: calendar});
});

router.post('/', (req, res, next) => {
  const { month } = req.query;
  // http://localhost:3000/corp => [ 'http:', '', 'localhost:3000', 'corp' ] =>
  // corp
  const fromPath = req.get('referrer').split('/').slice(-1).toString();
  let path = fromPath === 'm' ? 'mobile' : fromPath;

  const settings = Object.assign({}, { date: month, path });

  calendar = new Calendar(settings);

  res.render('calendar', { calendar }, (err, body) => {
    if(err) next(err);

    // const response = body;
    // const response = body;
    const response = `$('#calendar').removeClass('animated').html('${body}')`;
    res.set('Content-Type', 'application/javascript');
    res.send(response).end();


    res.end(response)
  })

});


module.exports = {router, Calendar};
