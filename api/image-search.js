'use strict';

require('dotenv').config();
var request = require('request');
var Searches = require('../models/searches.js'); 

// pass to this function the search terms (query) and offset (defaults to 1 if nothing passed).
exports.submit = function(terms,offset = 1) {
    return new Promise (function(resolve,reject) {
        var result;

        var reformattedTerms = terms.split(' ').join('+');

        var start;

        if (typeof offset === 'undefined') { 
            start = ""; 
        } else {
            start = "&start=" + offset;
        }

        var query = `https://www.googleapis.com/customsearch/v1?`
            + `key=${process.env.API_KEY}`
            + `&cx=${process.env.CX}`
            + `${start}`
            + `&num=10`
            + `&q=${reformattedTerms}`
            + `&searchType=image`
            + `&alt=json`;

        request(query, {json:true}, function(err,res,data) {

            if (err) {
                console.log('error: ' + err);
                result = { myerror: err }; 
                resolve(result);
            } else if (!err && data) { //&& res.statusCode == 200) {

                result = data.items.map(function(item) {
                    return {
                        url: item.link,
                        snippet: item.snippet,
                        thumbnail: item.image.thumbnailLink,
                        context: item.image.contextLink
                    };
                });                


                Searches.create({
                    term: terms,
                    when: Date.now() 
                }, function(err,doc) {
                    if (err) {
                        console.log('error: ' + err);
                    } else {
                        console.log('saved query to db. term: ' + terms);
                    }
                });

                resolve(result);
//                resolve(data);

            } else {
                console.log('something went wrong.');
            }

        });

    });
};

/*
exports.latest = function() {
    return new Promise(function(resolve,reject) {
        Searches.find().select('term when').sort({"when": -1}).limit(10)
        .then(
            function(result) {
                var resultLatest = {
                    term: result.term,
                    when: result.when
                }
                resolve(resultLatest);
            }
        );
    });

};
*/
