var express = require('express');
var router = express.Router();

const db = require('./../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  const { fullName } = db.namedata;
  const { city } = db;
  res.render('index', { fullName, city });
});

module.exports = router;
