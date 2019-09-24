const database = require('../bin/sequelize')

var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  
  let Sites = database.entities.Sities
  
  Sites.create({
    description: "Parque del Gato",
    address: "Avenidad las americas",
    web: "http://www.google.com?q=Parque%20del%20gato%20Cali",
    email: "cali@gov.co",
    local_phone: "01234567",
    mobile_hone: "3183001020"
  })
  .then( site => {
    res.json({ error: false, id:site._id })
  })
  .catch( error => {
    res.json({ error: true, message: error.errors })
  })
});

router.get('/', function(req, res, next) {
  
  let Sites = database.entities.Sities
  
  Sites.findAll()
  .then( sites => {
    res.json({ error: false, sites })
  })
  .catch( error => {
    res.json({ error: true, message: error.errors })
  })
});

module.exports = router;
