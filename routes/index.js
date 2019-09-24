var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(process.env.DATABASE_URL);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
