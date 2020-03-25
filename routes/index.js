var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'index' });
});

router.get('/page2', function(req, res, next) {
    res.render('page2', { title: 'page2' });
});

router.get('/page3', function(req, res, next) {
    res.render('index', { title: 'page3' });
});

router.get('/page4', function(req, res, next) {
    res.render('index', { title: 'page4' });
});

router.get('/page5', function(req, res, next) {
    res.render('index', { title: 'page4' });
});

router.get("/errored-page", function(req, res, next) {
    res.status(500);
    res.end();
});

router.get("/private-page", function(req, res, next) {
    res.status(401);
    res.json({message : "your are not authentified"})
})

router.get("/permanent-redirect-to-root-page", function(req, res, next) {
    res.redirect(301, "/")
})

router.get("/temporary-redirect-to-error-page", function(req, res, next) {
    res.redirect(302, "/errored-page")
});

router.get("/created", function(req, res, next) {
    res.status(201);
    res.render("index", {title : 'created'});
});


module.exports = router;
