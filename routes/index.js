var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
        res.render('index.njk', {
            data_json: require('../data.json')});
});

/* GET checklist page. */
router.get('/seo-checklist', function(req, res) {
        res.render('seo-checklist.njk', {
             checklist_json: require('../checklist.json')});
});



module.exports = router;
