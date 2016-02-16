var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'David Royer\'s websitwe' });
});

/* GET Ascension */
router.get('/ascension*', function(req, res, next) {
  res.render('ascension', { title: 'Ascension' });
});

/* GET Contact. */
router.get('/contact*', function(req, res, next) {
  res.render('contact', { title: 'Contact us' });
});

module.exports = router;
