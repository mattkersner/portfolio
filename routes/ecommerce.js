var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('ecommerce', {
    title: 'E-Commerce'
  });
});

module.exports = router;