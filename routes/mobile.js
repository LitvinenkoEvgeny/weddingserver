var express = require('express');
var router = express.Router();

const db = require('./../database');

router.get('/', (req, res, next) => {
  res.render('mobile')
});

module.exports = router;
