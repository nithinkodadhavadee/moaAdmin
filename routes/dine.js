var express = require('express');
var router = express.Router();
var path = require('path'); 
var fs = require("fs");
var { createDine, dineUpdate } = require('../controller/dine');
// import fetch from "node-fetch"
// var fetch = require("node-fetch")
/* GET home page. */

router.post('/createDine', createDine);
router.post('/:dineName', dineUpdate);

module.exports = router;
