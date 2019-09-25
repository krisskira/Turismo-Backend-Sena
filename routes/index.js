var express = require("express");
var router = express.Router();
const database = require("../bin/database/sequelize");

router.get("/", function (req, res, next) {
    let Hotels = database.entities.Hotels;
    let Sites = database.entities.Sites;
    let Operators = database.entities.Operators;
    Promise.all([
        Sites.findAll(),
        Hotels.findAll(),
        Operators.findAll()])
        .then(([sites,hotels,operators]) => {
            res.json({ sites,hotels,operators })
        })
        .catch( error=> res.status(500).json({error}) )
})
module.exports = router