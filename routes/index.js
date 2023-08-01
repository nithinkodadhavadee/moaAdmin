var express = require('express');
var router = express.Router();
var path = require('node:path'); 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  // res.send('respond with a login page');
  res.sendFile('auth-login.html', {root: path.join(__dirname, '../views')});
});

module.exports = router;
