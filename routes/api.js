var express = require('express');
var router = express.Router();
var path = require('path'); 
var { api, index, listDine, alldb } = require('../controller/api')
var { create } = require("../controller/index")
/* GET home page. */

router.get('/', api);
router.get('/db', alldb);
router.get('/index', index);
router.get('/dine', listDine);
router.post('/newsLetter', create);
router.post('/contact',create);

module.exports = router;
