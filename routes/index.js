var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
        res.render('index.njk', {
            data: require('../data/index_data.json')});
});




module.exports = router;
