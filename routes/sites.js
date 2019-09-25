const database = require("../bin/database/sequelize");

var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  
  let Sites = database.entities.Sites;
  Sites.create({ ...req.body })
    .then(site => res.status(201).json({ id: site._id }))
    .catch(error => res.status(500).json({ error }));
});

router.put("/:id", function (req, res, next) {

  _id = parseInt(req.params.id) || 0;
  let Sites = database.entities.Sites;
  Sites.update( {...req.body} ,{ where: { _id } })
    .then( ([numberOfAffectedRows]) => {
      code = numberOfAffectedRows > 0 ? 204 : 404
      res.status(code).end()
    })
    .catch(error => res.status(500).json({ error }));
});

router.get("/", function (req, res, next) {

  let Sites = database.entities.Sites;
  Sites.findAll()
    .then(sites => { res.json([...sites]) })
    .catch(error => { res.status(500).json({ error }) })
});

router.delete("/:id", function (req, res, next) {

  _id = parseInt(req.params.id) || 0;
  let Sites = database.entities.Sites;
  Sites.destroy({ where: { _id } })
    .then(numberOfAffectedRows => {
      code = numberOfAffectedRows > 0 ? 204 : 404
      res.status(code).end()
    })
    .catch(error => res.status(500).json({ error }));
});

module.exports = router;
