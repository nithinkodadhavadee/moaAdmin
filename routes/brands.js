var express = require('express');
var router = express.Router();
var path = require('node:path'); 
var fs = require("fs")
/* GET home page. */

var brandsStr = require('../siteData/brands')


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brands' });
});

router.get('/list', function(req, res, next) {
    res.send(brands);
});

router.get('/:brandName', function(req, res, next) {
    brands = brandsStr //JSON.parse(brandsStr);
    let toReturn = "No such brand exists";
    brandName = req.params.brandName;
    console.log(brandName)
    brands["brands"].forEach(element => {
        console.log(element.title)
        if(element.title.toLowerCase() == brandName){
            toReturn = element
        }
    });
    res.send(toReturn);
});

router.post('/:brandName', async function(req, res, next) {
    console.log("this is what brands string contains")
    console.log(brandsStr)
    console.log(brandsStr.type)
    brands = brandsStr //JSON.parse(brandsStr);
    let seenBrands = [];
    flag = 0;
    brandName = req.params.brandName;
    console.log(brandName)

    brandDetails = req.body;
    console.log(brandDetails);

    if(brandDetails.title.toLowerCase() != brandName.toLowerCase()){
        res.send("invalid data sent")
        return
    }

    brands["brands"].forEach(element => {
        console.log(element.title)
        if(element.title.toLowerCase() == brandName){
            flag = 1;
            seenBrands.push(brandDetails);
        }
        else{
            seenBrands.push(element)
        }
    });

    if(!flag){
        res.send("No such brand exist")
    }
    else{
        console.log(path.join(__dirname, "../siteData", "brands.json"))
        console.log(seenBrands)
        fs.writeFileSync(path.join(__dirname, "../siteData", "brands.json"), JSON.stringify({"brands":seenBrands}));
        res.send("brand updated");
    }
});
module.exports = router;
