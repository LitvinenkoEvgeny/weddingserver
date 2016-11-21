const express = require('express');
const router = express.Router();

const db = require('./../database');
const Calendar = require('./calendar.js').Calendar;




class reviewsSlider {
  constructor(items) {
    this.dbItems = items;
    this.width = this.generateSliderWidth(this.dbItems);
    this.sliderData = this.generateSliderData(this.dbItems);
  }

  generateSliderWidth(array){
    return `${this.countReviewsWidth(array)}`;
  }

  countReviewsWidth(array){

    const singleColumnWidth = 18;
    // две пустые изначально
    let counter = 0;


    for (var yearArray in array) {
      if (array.hasOwnProperty(yearArray)) {

        counter += array[yearArray].length;

      }
    }

    return this.divideForColumns(counter) * singleColumnWidth;
  }

  divideForColumns(items){
    return items % 3 === 0 ? items / 3 : Math.ceil(items / 3);
  }

  generateSliderData(items){
    let sliderData = [];

    for (const year in items) {
      let isFirst = true;

      if (items.hasOwnProperty(year)) {
        let yearArray = items[year];
        let lastItems;

        let yearColumnObject = {
          prevYear: +year - 1,
          nextYear: +year,
          slides: []
        };

        let columnObject = {
          slides: []
        };

        if(yearArray.length <= 3){
          yearColumnObject.slides = [...yearArray];
        } else {
          yearColumnObject.slides = [ ...yearArray.slice(0, 3) ];
        }
        sliderData.push(yearColumnObject);

        if(yearArray.length % 3 !== 0){
          let needItems, len = yearArray.length, empty = { empty: true };
          needItems = (len + 1) % 3 ? 1 : 2;
          lastItems = yearArray.slice(`-${needItems}`);
          while(lastItems.length !== 3){
            lastItems.push(empty);
          };
        };

        for (let i = 3; i < yearArray.length + 1; i++) {
          const slide = yearArray[i];
          const counter = i + 1;

          if(columnObject.slides.length === 3){
            sliderData.push(columnObject);
            columnObject = {
              slides: []
            }
            columnObject.slides.push(slide);
          } else {
            columnObject.slides.push(slide);
          }
        }

        if(lastItems){
          sliderData.push({slides: lastItems})
        }
      }

    }
    return sliderData;
  }

  isDivideByThree(array){
    return array.length % 3 === 0 ? true : false;
  }

  howMuchNeed(arrayLength){
    return (arrayLength - 1 % 3) === 0 ? 1 : 2;
  }
}



router.get('/', (req, res, next) => {
  const settings = {path: 'wedding'};
  const calendar = new Calendar(settings);
  const {
    vkGroup, wedding, city, namedata, phone, mainInfo, socialButtons
  } = db;


  const { reviewsByYear } = wedding;
  const slider = new reviewsSlider(reviewsByYear);

  res.render('wedding', {
    wedding,
    vkGroup,
    city,
    namedata,
    phone,
    mainInfo,
    socialButtons,
    slider: slider,
    calendar
  });
});


router.get('/get-photos/:id', (req, res, next) => {
  const { id } = req.params;
  let photosForItem = db.wedding.eventsItems.filter(event => {
    return +event.linkToOtherImgs === +id;
  });

  if(photosForItem.length === 1){
    photosForItem = photosForItem[0].photos;

    if(photosForItem.length === 0){
      res.sendStatus(404).end();
    }

    res.render('get-photos.jade', { images: photosForItem }, (err, body) => {
      if(err) next(err);

      res.send(body).end();

    });

  } else {
    res.json({ error: `length of finded items = ${photosForItem.length}` });
  }
});


router.get('/reviews/:id', (req, res, next) => {
  const { id } = req.params;

  const { wedding } = db;

  const { reviewsByYear } = wedding;

  for (var year in reviewsByYear) {
    if (reviewsByYear.hasOwnProperty(year)) {

      reviewsByYear[year].forEach(item => {
        if(item.id === +id){
          const reviewData = item;

          res.render('review', { item: reviewData }, (err, body) => {
            if(err)  next(err);

            res.set('Content-Type', 'application/javascript');
            res.send(`
              $(".close-review").removeClass('hidden');
              $("#show-review-nav").removeClass('hidden');
              $("#show-review").removeClass('hidden').children('.handle').html('${body}');
            `).end();
          })
        }
      })
    }
  }
  res.status(404).end();

});


module.exports = router;
