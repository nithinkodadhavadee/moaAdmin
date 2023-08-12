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

async function createDine(req, res, next){
    let db = await readDb();
    dine = db.dine;
    let newDine = req.body;
    console.log(newDine);
    dine.push(newDine);

    console.log("\dines with new dine")
    console.log(dine);
    await updateDb("dine", dine);
    res.send({
        status: 200,
        message: "aithu I guess"
    })
}

async function dineUpdate(req, res, next){

    let db = await readDb();
    dine = db.dine;
    // console.log(typeof brands.record.brands);
    console.log(typeof dine);
    let toReturn = "No such brand exists";
    dineName = req.params.dineName;
    console.log(dineName)
    // brands.forEach(element => {
    //     console.log(element.title)
    //     if(element.title.toLowerCase() == brandName){
    //         element = req.body;
    //     }
    // });
    for(let i=0; i<dine.length; i++){
        if(dine[i].title===dineName){
            dine[i] = req.body;
        }
    }
    console.log(dine);
    await updateDb("dine", dine);
    return res.send({
        status: 200,
        message: "nada"
    })
    // res.send(toReturn);
}

module.exports = { createDine, dineUpdate };