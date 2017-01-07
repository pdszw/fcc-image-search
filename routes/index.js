var express = require('express');
var router = express.Router();

var imageSearch = require('../api/image-search.js');

var Searches = require('../models/searches.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /api/imagesearch/:query(*)

router.get('/api/imagesearch/:query(*)', function(req,res) {
    res.send('query');
});

// GET /api/latest/imagesearch/
router.get('/api/latest/imagesearch/', function(req,res) {
    res.send('latest');
});

module.exports = router;
