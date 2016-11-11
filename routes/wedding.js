const express = require('express');
const router = express.Router();

const db = require('./../database');

router.get('/', (req, res, next) => {
  const { wedding, city, namedata, phone, mainInfo, socialButtons } = db;
  res.render('wedding', {
    wedding,
    city,
    namedata,
    phone,
    mainInfo,
    socialButtons
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
