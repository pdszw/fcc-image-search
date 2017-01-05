// vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab:

'use strict';

// root
router.get('/', function(req,res) {
//    res.status(200).sendFile('index');
    var html = template('index');
    res.send(html);
});

// latest search terms
router.get('/api/latest/imagesearch', api.latestQueries);

// submit a search query
router.get('/api/imagesearch/:query(*)', api.submitQuery);

router.get('*', function(req,res) {
    //res.status(404).sendFile('404');
    var html = template('404');
    res.send(html);
}

modules.export = router;
