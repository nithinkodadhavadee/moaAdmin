var express = require('express');
var router = express.Router();
var path = require('path'); 
var fs = require("fs");
// import fetch from "node-fetch"
// var fetch = require("node-fetch")
/* GET home page. */
const axios = require('axios');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brands' });
});

router.get('/list', async function(req, res, next) {

    let brands = "";
    try {
        brands = await axios.get("https://api.jsonbin.io/v3/b/64c8d7b39d312622a389ef85/latest", { 
            headers: {
              "Content-Type":"application/json",
              "X-Master-Key":"$2b$10$nRZg.B/077TlbUN7.Hr49.eyMY8rXkXALUmbNeYa3VjVMJTL7McLC"
            }
        });
        console.log(brands.data);
      } catch (error) {
        console.error(error);
      }

      
    // brands = await fetch("https://api.jsonbin.io/v3/b/64c8d7b39d312622a389ef85/latest", {
    //         method: "GET",
    //         headers: {
    //           "Content-Type":"application/json",
    //           "X-Master-Key":"$2b$10$nRZg.B/077TlbUN7.Hr49.eyMY8rXkXALUmbNeYa3VjVMJTL7McLC"
    //         }
    //       }).then((response) => response.json());

    // console.log(typeof brands.record.brands);
    brands = brands.data.record.brands;
    res.send(brands);
});

router.get('/:brandName', async function(req, res, next) {
    
        // brands = await fetch("https://api.jsonbin.io/v3/b/64c8d7b39d312622a389ef85/latest", {
        //     method: "GET",
        //     headers: {
        //       "Content-Type":"application/json",
        //       "X-Master-Key":"$2b$10$nRZg.B/077TlbUN7.Hr49.eyMY8rXkXALUmbNeYa3VjVMJTL7McLC"
        //     }
        //   }).then((response) => response.json());

        let brands = "";
    try {
        brands = await axios.get("https://api.jsonbin.io/v3/b/64c8d7b39d312622a389ef85/latest", { 
            headers: {
              "Content-Type":"application/json",
              "X-Master-Key":"$2b$10$nRZg.B/077TlbUN7.Hr49.eyMY8rXkXALUmbNeYa3VjVMJTL7McLC"
            }
        });
        console.log(brands.data);
      } catch (error) {
        console.error(error);
      }

    // console.log(typeof brands.record.brands);
    brands = brands.data.record.brands;
    console.log(typeof brands);
    let toReturn = "No such brand exists";
    brandName = req.params.brandName;
    console.log(brandName)
    brands.forEach(element => {
        console.log(element.title)
        if(element.title.toLowerCase() == brandName){
            toReturn = element
        }
    });
    res.send(toReturn);
});

router.post('/:brandName', async function(req, res, next) {
    console.log("this is what brands string contains")
    // console.log(brandsStr)
    // console.log(brandsStr.type)
    // brands = brandsStr //JSON.parse(brandsStr);

    // brands = await fetch("https://api.jsonbin.io/v3/b/64c8d7b39d312622a389ef85/latest", {
    //         method: "GET",
    //         headers: {
    //           "Content-Type":"application/json",
    //           "X-Master-Key":"$2b$10$nRZg.B/077TlbUN7.Hr49.eyMY8rXkXALUmbNeYa3VjVMJTL7McLC"
    //         }
    //       }).then((response) => response.json());

    // console.log(typeof brands.record.brands);

    let brands = "";
    try {
        brands = await axios.get("https://api.jsonbin.io/v3/b/64c8d7b39d312622a389ef85/latest", { 
            headers: {
              "Content-Type":"application/json",
              "X-Master-Key":"$2b$10$nRZg.B/077TlbUN7.Hr49.eyMY8rXkXALUmbNeYa3VjVMJTL7McLC"
            }
        });
        console.log(brands.data);
      } catch (error) {
        console.error(error);
      }

    brands = brands.data.record.brands;

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

    brands.forEach(element => {
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
        // console.log(path.join(__dirname, "../siteData", "brands.json"))
        // console.log(seenBrands)
        // fs.writeFileSync(path.join(__dirname, "../siteData", "brands.json"), JSON.stringify({"brands":seenBrands}));

        // await fetch("https://api.jsonbin.io/v3/b/64c8d7b39d312622a389ef85", {
        //     method: "PUT",
        //     body: JSON.stringify({"brands": seenBrands}),
        //     headers: {
        //       "Content-Type":"application/json",
        //       "X-Master-Key":"$2b$10$nRZg.B/077TlbUN7.Hr49.eyMY8rXkXALUmbNeYa3VjVMJTL7McLC"
        //     }
        //   }).then((res)=>{
        //     // console.log(res)
        //     console.log("data written")
        //   });

        await axios.put('https://api.jsonbin.io/v3/b/64c8d7b39d312622a389ef85',JSON.stringify({"brands":seenBrands}), {
                headers: {
                  "Content-Type":"application/json",
                  "X-Master-Key":"$2b$10$nRZg.B/077TlbUN7.Hr49.eyMY8rXkXALUmbNeYa3VjVMJTL7McLC"
                }
          })

        res.send("brand updated");
    }
});
module.exports = router;
