// vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab:

'use strict';

var mongoose = require('mongoose');

// define latestSearches schema
var latestSearchesSchema = new mongoose.Schema({
    term: String,
    when: Date
});

var latestSearches = mongoose.model('latestSearches', latestSearchesSchema);
