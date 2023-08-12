var express = require('express');
var router = express.Router();
var path = require('path'); 
var { index, updateHeader, updateFooter, getHeader, getFooter } = require('../controller/headerFooter');

router.get('/', index);
router.get('/getHeader', getHeader);
router.get('/getFooter', getFooter)
router.post('/updateHeader', updateHeader);
router.post('/updateFooter', updateFooter);

module.exports = router;
