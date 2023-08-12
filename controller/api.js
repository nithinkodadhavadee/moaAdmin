function api(req, res, next) {
  res.render('index', { title: 'API Docs' });
}

function index(req, res, next) {
    res.render('index', { title: 'API index' });
}

module.exports = { api, index };