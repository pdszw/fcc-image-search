var request = require('request');

// pass to this function the search terms (query) and offset (defaults to 1 if nothing passed).
exports.submit = function(terms,offset = 1) {
    return new Promise (function(resolve,reject) {

        function testing() {
            var searchResult = { terms: terms, offset: offset };
            resolve(searchResult);        // resolve the promise with var 'searchResult', which then returns it to whatever called submitSearches.
        }
        //return { terms: terms, offset: offset }
        setTimeout(testing, 5000);
    });
};
