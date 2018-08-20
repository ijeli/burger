var express = require("express");
var burgerCode = require("../models/burger.js");
var router = express.Router();


router.get('/', function(req, res) {
    burgerCode.selectAll(function(data) {
        var hbsOject = {
            burgers: data
        };
        res.render('index', hbsOject);
    });
});

router.post('/burgers', function(req, res) {
    burgerCode.insertOne([
      'burger_name'
    ], [
      req.body.burger_name
    ], function(data) {
      res.redirect('/');
    });
  });
  
  router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burgerCode.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
