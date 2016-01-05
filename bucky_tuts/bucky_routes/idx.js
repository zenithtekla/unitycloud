var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(res, req, next) {
    res.render('sample', {
        "title": "Experiment with EJS",
        "fname": "Zenith",
        "lname": "Tekla"
    });
});

module.exports = router;