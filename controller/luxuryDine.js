let { readDb } = require('../models/read');
let { updateDb } = require('../models/update');

async function createDine(req, res, next){
    let db = await readDb();
    dine = db.luxuryDine;
    let newDine = req.body;
    console.log(newDine);
    dine.push(newDine);

    console.log("creating dines with new dine")
    // console.log(dine);
    await updateDb("luxuryDine", dine);
    res.send({
        status: 200,
        message: "aithu I guess"
    })
}

async function dineUpdate(req, res, next){
    console.log("updating luxury dine")
    let db = await readDb();
    dine = db.luxuryDine;
    // console.log(typeof brands.record.brands);
    // console.log(typeof dine);
    let toReturn = "No such brand exists";
    dineName = req.params.dineName;
    // console.log(dineName)
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
    // console.log(dine);
    await updateDb("luxuryDine", dine);
    return res.send({
        status: 200,
        message: "nada"
    })
    // res.send(toReturn);
}

async function dineDetails(req, res, next){

    let db = await readDb();
    dine = db.luxuryDine;
    // console.log(typeof brands.record.brands);
    console.log(typeof dine);
    let toReturn = "No such brand exists";
    dineName = req.params.dineName;
    console.log(dineName)
    dine.forEach(element => {
        console.log(element.title)
        if(element.title.toLowerCase() == dineName.toLowerCase()){
            toReturn = element
        }
    });
    res.send(toReturn);
}

module.exports = { createDine, dineUpdate, dineDetails };