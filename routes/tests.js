var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/clock', function(req, res, next) {
  res.render('test/clock', { title: 'Promies' });
});

router.get('/3d', function(req, res, next) {
  res.render('test/3d', { title: 'Promies' });
});

router.get('/practice', function(req, res, next) {
  res.render('test/practice', { title: 'Promies' });
});

router.get('/canvas', function(req, res, next) {
  res.render('test/canvas', { title: 'Promies' });
});

module.exports = router;
