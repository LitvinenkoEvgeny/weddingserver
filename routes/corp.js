var express = require('express');
var router = express.Router();

const db = require('./../database');

/* GET corp page. */
router.get('/', (req, res, next) => {
  const { corp, city, namedata } = db;
  res.render('corp', { corp, city, namedata });
});

router.get('/get-photos/:id', (req, res, next) => {
  const { id } = req.params;
  let photosForItem = db.corp.eventsItems.filter(event => {
    return event.id === +id;
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
