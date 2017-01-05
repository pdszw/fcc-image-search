// vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab:

// needed for process.env stuff
require('dotenv').config();

// vars from process.env
var dbURL = process.env.DB_URL
var googleAPIKey = process.env.API_KEY
var googleCX = process.env.CX
var googleAppID = process.env.APP_ID

// load needed packages
var express = require('express');
var mongoose = require('mongoose');
var request = require('request');

// load own modules
var api = require('./api/image-search.js');
var routes = require('./routes/index.js');

// init app
var app = express();

// connect mongoose
// db START

mongoose.connect(dbURL);

// define latestSearches schema
var latestSearchesSchema = new mongoose.Schema({
    term: String,
    when: Date
});

var latestSearches = mongoose.model('latestSearches', latestSearchesSchema);

// db END
