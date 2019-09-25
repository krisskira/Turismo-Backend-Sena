const database = require("../bin/sequelize");

var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  
  let Operators = database.entities.Operators;
  Operators.create({ ...req.body })
    .then(site => res.status(201).json({ id: site._id }))
    .catch(error => res.status(500).json({ error }));
});

router.put("/:id", function (req, res, next) {

  _id = parseInt(req.params.id) || 0;
  let Operators = database.entities.Operators;
  Operators.update( {...req.body} ,{ where: { _id } })
    .then( ([numberOfAffectedRows]) => {
      code = numberOfAffectedRows > 0 ? 204 : 404
      res.status(code).end()
    })
    .catch(error => res.status(500).json({ error }));
});

router.get("/", function (req, res, next) {

  let Operators = database.entities.Operators;
  Operators.findAll()
    .then(operators => { res.json([...operators]) })
    .catch(error => { res.status(500).json({ error }) })
});

router.delete("/:id", function (req, res, next) {

  _id = parseInt(req.params.id) || 0;
  let Operators = database.entities.Operators;
  Operators.destroy({ where: { _id } })
    .then(numberOfAffectedRows => {
      code = numberOfAffectedRows > 0 ? 204 : 404
      res.status(code).end()
    })
    .catch(error => res.status(500).json({ error }));
});

module.exports = router;
