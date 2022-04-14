var express = require('express');
var router = express.Router();

router.get('/page2', function(req, res, next) {
  res.render('page2', {usuario: req.session.user_nom});
  console.log(req.session.user_nom);
});

router.get('/salir', function(req, res, next) {
  req.session.destroy();
  res.render('index');
});



module.exports = router;
