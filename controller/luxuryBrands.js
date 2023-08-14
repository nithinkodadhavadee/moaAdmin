let { readDb } = require('../models/read');
let { updateDb } = require('../models/update');


async function brandDetails(req, res, next){

    let brands = await readDb();
    brands = brands.luxuryBrands;
    // console.log(typeof brands.record.brands);
    console.log(typeof brands);
    let toReturn = "No such brand exists";
    brandName = req.params.brandName;
    console.log(brandName)
    brands.forEach(element => {
        console.log(element.title)
        if(element.title.toLowerCase() == brandName.toLowerCase()){
            toReturn = element
        }
    });
    res.send(toReturn);
}

async function createBrand(req, res, next){
    console.log("creating new brand")
    let brands = await readDb();

    brands = brands.luxuryBrands;
    let newBrand = req.body;
    console.log(newBrand);
    brands.push(newBrand);

    console.log("\nbrands with new brand")
    console.log(brands);
    await updateDb("luxuryBrands", brands);
    res.send({
        status: 200,
        message: "aithu I guess"
    })
}

async function updateBrand(req, res, next){
    console.log("updating luxury brand");
    let brands = await readDb();
    brands = brands.luxuryBrands;
    // console.log(typeof brands.record.brands);
    // console.log(typeof brands);
    let toReturn = "No such brand exists";
    brandName = req.params.brandName;
    console.log(brandName)
    // brands.forEach(element => {
    //     console.log(element.title)
    //     if(element.title.toLowerCase() == brandName){
    //         element = req.body;
    //     }
    // });
    for(let i=0; i<brands.length; i++){
        if(brands[i].title.toLowerCase()===brandName.toLowerCase()){
            brands[i] = req.body;
        }
    }
    // console.log(brands);
    await updateDb("luxuryBrands", brands);
    return res.send({
        status: 200,
        message: "nada"
    })
    // res.send(toReturn);
}

module.exports = { brandDetails, createBrand, updateBrand };