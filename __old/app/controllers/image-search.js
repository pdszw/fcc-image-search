// vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab:

'use strict';

module.exports = {

    // router.get('/api/latest/imagesearch',...
    latestQueries: function(req,res) {
        res.send('sent latest queries');
    },

    // router.get('/apiimagesearch/:query(*),...
    submitQuery: function(req,res) {
    
        var searchQuery = req.params.query;
        var timestamp = new Date().toISOString();
        res.send('sent submitquery and ' + timestamp);

    }

};


