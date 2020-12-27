var express = require('express');
var router = express.Router();

// localhost:3000/
router.get('/', function(req, res) {
  res.render('index', 
  { 
    title: 'Show Drama List', 
    isLogin: req.session.isLogin, 
    userEmail: req.session.userEmail 
  });
});

module.exports = router;