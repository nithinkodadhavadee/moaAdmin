var express = require('express');
var router = express.Router();
var path = require('path'); 
var { api, index, listDine } = require('../controller/api')
/* GET home page. */

router.get('/', api);
router.get('/index', index);
router.get('/dine', listDine);


module.exports = router;
