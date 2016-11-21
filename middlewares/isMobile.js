const MobileDetect = require('mobile-detect');
const router = require('express').Router();

function isMobile (req, res, next) {
  const md = new MobileDetect(req.headers['user-agent']);
  if(md.phone() || md.tablet()){
    res.redirect('/m#');
  }
}

module.exports = isMobile;
