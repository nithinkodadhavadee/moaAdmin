var express = require('express');
var router = express.Router();
var path = require('path'); 
var fs = require("fs");
var { details, create, update, del } = require('../controller/index');
// import fetch from "node-fetch"
// var fetch = require("node-fetch")
/* GET home page. */

router.get('/', details);
router.post('/', create);
router.patch('/', update);
router.delete('/', del);
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/login', function(req, res, next) {
  // res.send('respond with a login page');
  res.sendFile('auth-login.html', {root: path.join(__dirname, '../views')});
});

module.exports = router;
