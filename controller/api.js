var { readDb } = require('../models/read')

function api(req, res, next) {
  res.render('apiDocs', { title: 'API Docs' });
}

function index(req, res, next) {
    res.render('index', { title: 'API index' });
}

async function listDine(req, res, next){

  let brands = await readDb();
  brands = brands.dine;
  console.log(brands)
  res.send(brands);
}

async function alldb(req, res, next){
 console.log("retrieving all db entries")
  let db = await readDb();
  res.send(db);
}

module.exports = { api, index, listDine, alldb };