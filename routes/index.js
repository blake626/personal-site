var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blake Williams',
  desc: 'Computer Science Student, Artist, Skincare Enthusiast' });
});

module.exports = router;
