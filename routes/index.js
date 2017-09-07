var express = require('express');
var router = express.Router();
var db = require('../config/common/db')();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index','index');
  res.render('index', { title: 'Express' });
});

module.exports = router;
