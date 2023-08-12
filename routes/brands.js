var express = require('express');
var router = express.Router();
var path = require('path'); 
var fs = require("fs");
var { index, listBrands, brandDetails, createBrand, updateBrand } = require('../controller/brands');
// import fetch from "node-fetch"
// var fetch = require("node-fetch")
/* GET home page. */
const axios = require('axios');


router.get('/', index);
router.get('/list', listBrands);
router.get('/:brandName', brandDetails);
router.post('/:brandName', updateBrand);
router.post('/createBrand', createBrand);

module.exports = router;
