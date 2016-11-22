var express = require('express');
var router = express.Router();

/* GET index page. */

router.get('/', function(req, res) {

  if (!req.session.token) {
    return res.redirect('/login');
  }

  res.render('home');
});

module.exports = router;
