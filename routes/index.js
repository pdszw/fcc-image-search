// vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab:

'use strict';

modules.export = function(app,db) {

    // root
    app.get('/', function(req,res) {

    });

    // latest search terms
    app.get('/api/latest/imagesearch', function(req,res) {

    });

    // submit a search query
    app.get('/api/imagesearch/:query(*)', function(req,res) {

    });

};
