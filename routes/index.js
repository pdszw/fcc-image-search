var express = require('express');
var router = express.Router();

var imageSearch = require('../api/image-search.js');

var Searches = require('../models/searches.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /api/imagesearch/:terms?offset=1
// eg: /api/imagesearch/lolcats%20funny?offset=10
router.get('/api/imagesearch/:terms', function(req,res) {
    imageSearch.submit(req.params.terms,req.query.offset)
    .then(
        function(result) { 
            res.json(result); 
        }
    ); 
});

// GET /api/latest/imagesearch/
router.get('/api/latest/imagesearch/', function(req,res) {
        // select only term and when fields, explicitly exclude _id field
        Searches.find().select('-_id term when').sort({"when": -1}).limit(10)
        .then(
          function(result) {
              res.json(result);
          }
        );
});

module.exports = router;
