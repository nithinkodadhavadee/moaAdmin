var express = require('express');
var router = express.Router();
var path = require('node:path'); 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'header' });
});



module.exports = router;
