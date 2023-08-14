var express = require('express');
var router = express.Router();
var path = require('path'); 
var fs = require("fs");
var { brandDetails, createBrand, updateBrand } = require('../controller/luxuryBrands');
// import fetch from "node-fetch"
// var fetch = require("node-fetch")
/* GET home page. */

router.get('/:brandName', brandDetails);
router.post('/createDine', createBrand);
router.patch('/:brandName', updateBrand);

module.exports = router;
