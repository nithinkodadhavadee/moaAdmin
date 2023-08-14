var express = require('express');
var router = express.Router();
var path = require('path'); 
var fs = require("fs");
var { createDine, dineUpdate, dineDetails } = require('../controller/luxuryDine');
// import fetch from "node-fetch"
// var fetch = require("node-fetch")
/* GET home page. */

router.get('/:dineName', dineDetails);
router.post('/createDine', createDine);
router.patch('/:dineName', dineUpdate);

module.exports = router;
