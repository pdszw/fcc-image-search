// vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab:

// helps catch errors, throw more exceptions, less silent failure, etc
'use strict';

// needed for process.env stuff
require('dotenv').config();

// vars from process.env
var dbURL = process.env.DB_URL;
var googleAPIKey = process.env.API_KEY;
var googleCX = process.env.CX;
var googleAppID = process.env.APP_ID;
var port = process.env.port || 3000;
var selfURL = req.protocol + '://' + req.get(host);
//var path = process.cwd();

// load needed packages
var express = require('express');
var mongoose = require('mongoose');
var request = require('request');
var template = require('jade');

// load own modules
var api = require('./api/image-search.js');
var routes = require('./routes/index.js');

// init app
var app = express();

app.use(express.static(__dirname + '/static'))
app.use(routes);

// db START

// connect mongoose to db
mongoose.connect(dbURL);

// define latestSearches schema
var latestSearchesSchema = new mongoose.Schema({
    term: String,
    when: Date
});

var latestSearches = mongoose.model('latestSearches', latestSearchesSchema);

// db END


// MAYBE NOT NEEDED
//routes(app,db);
//api(app,db);

// start app
app.listen(port);
