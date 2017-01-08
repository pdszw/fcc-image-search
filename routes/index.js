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
//      THIS WILL ACTUALLY NEED TO BE 'Searches.find().sort(-when).limit(10).then(function...


        // select only term and when fields, explicitly exclude _id field
        Searches.find().select('-_id term when').sort({"when": -1}).limit(10)
        .then(
          function(result) {
              res.json(result);
          }
        );



/*
        imageSearch.latest().then(function(result) { res.json(result) });
*/
/*
        function testing2() {
            var latestResult = { "row": [ { terms: "something", when: "2 days ago" }, { terms: "something else", when: "3 days ago" } ] };
            res.json(latestResult);
        }
        setTimeout(testing2, 3000);
*/
});

module.exports = router;
