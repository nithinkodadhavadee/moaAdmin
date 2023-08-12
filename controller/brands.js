var { readDb } = require('../models/read')

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
module.exports = { index, listBrands, brandDetails };