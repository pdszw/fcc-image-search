var mongoose = require('mongoose');

var searchesSchema = new mongoose.Schema({
    term: String,
    when: {
        type: Date,
        default: Date.now
    }
});

var Searches = mongoose.model('Searches', searchesSchema);

module.exports = Searches;
