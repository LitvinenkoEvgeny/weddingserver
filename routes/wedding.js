const express = require('express');
const router = express.Router();

const db = require('./../database');




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
    let counter = 2;


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
        const yearArray = items[year];

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

        for (let i = 2; i < yearArray.length; i++) {
          const slide = yearArray[i];
          const counter = i + 1;

          if(columnObject.slides.length === 3){
            sliderData.push(columnObject);
            columnObject = {
              slides: []
            }
          } else {
            columnObject.slides.push(slide);
          }


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
  const {
    wedding, city, namedata, phone, mainInfo, socialButtons
  } = db;


  const { reviewsByYear } = wedding;
  const slider = new reviewsSlider(reviewsByYear);

  res.render('wedding', {
    wedding,
    city,
    namedata,
    phone,
    mainInfo,
    socialButtons,
    slider: slider
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


module.exports = router;
