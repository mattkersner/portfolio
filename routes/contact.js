var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('contact', {
    title: 'Contact',
    name: 'Matt Kersner',
    email: 'mattkersner@gmail.com'
  });
});

module.exports = router;
