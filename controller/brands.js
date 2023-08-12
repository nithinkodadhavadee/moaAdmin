let { readDb } = require('../models/read');
let { updateDb } = require('../models/update');

function index(req, res, next){
    res.render('index', { title: 'Brands' });
}

async function listBrands(req, res, next){

    let brands = await readDb();
    brands = brands.brands;
    console.log(brands)
    res.send(brands);
}

async function brandDetails(req, res, next){

    let brands = await readDb();
    brands = brands.brands;
    // console.log(typeof brands.record.brands);
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
}

async function createBrand(req, res, next){
    let brands = await readDb();
    brands = brands.brands;
    let newBrand = req.body;
    console.log(newBrand);
    brands.push(newBrand);

    console.log("\nbrands with new brand")
    console.log(brands);
    await updateDb("brands", brands);
    res.send({
        status: 200,
        message: "aithu I guess"
    })
}

async function updateBrand(req, res, next){

    let brands = await readDb();
    brands = brands.brands;
    // console.log(typeof brands.record.brands);
    console.log(typeof brands);
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
        if(brands[i].title===brandName){
            brands[i] = req.body;
        }
    }
    console.log(brands);
    await updateDb("brands", brands);
    return res.send({
        status: 200,
        message: "nada"
    })
    // res.send(toReturn);
}

module.exports = { index, listBrands, brandDetails, createBrand, updateBrand };