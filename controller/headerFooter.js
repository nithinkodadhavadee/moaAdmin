var { readDb } = require('../models/read');
var { updateDb } = require('../models/update')

async function index(req, res, next) {
    let data = await readDb();
    console.log(data)
    res.send({
        header: {...data.header},
        footer: {...data.footer}
    });
}

async function getHeader(req, res, next) {
    let data = await readDb();
    console.log(data)
    res.send({...data.header});
}

async function getFooter(req, res, next) {
    let data = await readDb();
    console.log(data)
    res.send({...data.footer});
}

function updateHeader(req, res, next){
    let data = req.body;
    console.log(data);
    updateDb("header", data);
    res.send({
        status: 200,
        message: "Assume everything went well"
    });
}

function updateFooter(req, res, next){
    let data = req.body;
    console.log(data);
    updateDb("footer", data);
    res.send({
        status: 200,
        message: "Assume everything went well"
    });
}

module.exports = { index, updateHeader, updateFooter, getHeader, getFooter };