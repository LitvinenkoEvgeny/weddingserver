var express = require('express');
var router = express.Router();

const db = require('./../database');
const Calendar = require('./calendar.js').Calendar;

router.get('/', (req, res, next) => {
  const { mobile, city, namedata, phone, mainInfo, socialButtons } = db;
  const settings = {path: 'mobile'};
  const calendar = new Calendar(settings);
  res.render('mobile', {mobile, city, namedata, phone, mainInfo, socialButtons, calendar});
});

module.exports = router;
