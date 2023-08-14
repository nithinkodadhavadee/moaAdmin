let { readDb } = require('../models/read');
let { updateDb } = require('../models/update');


async function details(req, res, next){
    let toLook = req.query.module;
    let title = req.query.title;
    let db = await readDb();
    db = db[toLook];
    console.log(toLook);
    let toReturn = "No such module exists";
    console.log(title)

    if(!title){
        toReturn = db;
    }
    else{
        db.forEach(element => {
            // console.log(element.title)
            // console.log(title)
            if(element.title.toLowerCase() === title.toLowerCase()){
                toReturn = element
            }
        });

    }
    res.send(toReturn);
}

async function create(req, res, next){
    console.log("creating new db entry")
    let module = req.query.module;
    let title = req.query.title;

    let db = await readDb();

    db = db[module];
    let newEntry = req.body;
    db.push(newEntry);

    // console.log(db);
    await updateDb(module, db);
    res.send({
        status: 200,
        message: "aithu I guess"
    })
}

async function update(req, res, next){
    console.log("updating db entry")
    let module = req.query.module;
    let title = req.query.title;

    console.log(module)
    console.log(title)

    let db = await readDb();
    db = db[module];
    let toReturn = "No such brand exists";
    
    for(let i=0; i<db.length; i++){
        if(db[i].title.toLowerCase()===title.toLowerCase()){
            db[i] = req.body;
        }
    }
    await updateDb(module, db);
    return res.send({
        status: 200,
        message: "nada"
    })
}

async function del(req, res, next){
    console.log("deleting db entry")
    console.log(req.query)
    let module = req.query.module;
    let title = req.query.title;

    console.log(module)
    console.log(title)

    let db = await readDb();
    db = db[module];
    let toReturn = "No such brand exists";
    let toDelete;
    for(let i=0; i<db.length; i++){
        if(db[i].title.toLowerCase()===title.toLowerCase()){
            toDelete = i;
            db.splice(i, 1)
        }
    }
    
    await updateDb(module, db);
    return res.send({
        status: 200,
        message: "nada"
    })
}

module.exports = { details, create, update, del };