var express = require('express');
const pool = require('../modelos/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  

});

module.exports = router;
