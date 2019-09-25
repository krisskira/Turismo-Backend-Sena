const database = require("../bin/sequelize");

var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  
  let Sities = database.entities.Sities;
  Sities.create({ ...req.body })
    .then(site => res.status(201).json({ id: site._id }))
    .catch(error => res.status(500).json({ error }));
});

router.put("/:id", function (req, res, next) {

  _id = parseInt(req.params.id) || 0;
  let Sities = database.entities.Sities;
  Sities.update( {...req.body} ,{ where: { _id } })
    .then( ([numberOfAffectedRows]) => {
      code = numberOfAffectedRows > 0 ? 204 : 404
      res.status(code).end()
    })
    .catch(error => res.status(500).json({ error }));
});

router.get("/", function (req, res, next) {

  let Sities = database.entities.Sities;
  Sities.findAll()
    .then(sities => { res.json([...sities]) })
    .catch(error => { res.status(500).json({ error }) })
});

router.delete("/:id", function (req, res, next) {

  _id = parseInt(req.params.id) || 0;
  let Sities = database.entities.Sities;
  Sities.destroy({ where: { _id } })
    .then(numberOfAffectedRows => {
      code = numberOfAffectedRows > 0 ? 204 : 404
      res.status(code).end()
    })
    .catch(error => res.status(500).json({ error }));
});

module.exports = router;
