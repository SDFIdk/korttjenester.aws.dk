var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/home', function(req, res) {
  res.render('home');
});

router.get('/wms', function(req, res) {
  res.render('wms');
});

router.get('/wfs', function(req, res) {
  res.render('wfs');
});

router.get('/wmts', function(req, res) {
  res.render('wmts');
});

router.get('/om', function(req, res) {
	res.render('om');
});

module.exports = router;
