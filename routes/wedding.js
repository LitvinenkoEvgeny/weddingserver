const express = require('express');
const router = express.Router();

const db = require('./../database');

function divideForColumns(items) {
  return items % 3 === 0 ? items / 3 : Math.ceil(items / 3);
}

function countReviewsWidth (reviewsArray) {
  const singleColumnWidth = 18;
  // две пустые изначально
  let counter = 2;


  for (var yearArray in reviewsArray) {
    if (reviewsArray.hasOwnProperty(yearArray)) {

      counter += reviewsArray[yearArray].length;

    }
  }

  return divideForColumns(counter) * 3;
}

function generateSliderWidth (reviewsArray) {
  return `${countReviewsWidth(reviewsArray)}vw`;
}

router.get('/', (req, res, next) => {
  const {
    wedding, city, namedata, phone, mainInfo, socialButtons
  } = db;

  const { reviewsByYear } = wedding;
  const sliderWidth = generateSliderWidth(reviewsByYear);
  const sliderData = {
    reviewsByYear,
    sliderWidth
  };

  res.render('wedding', {
    wedding,
    city,
    namedata,
    phone,
    mainInfo,
    socialButtons,
    sliderData
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
