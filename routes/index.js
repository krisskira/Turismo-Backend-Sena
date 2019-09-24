const checkConnection = require('../bin/sequelize')

var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
      //res.json({mensaje:checkConnection.checkConnection()})
      //res.send( checkConnection.checkConnection() );
      //res.render('index', { title: 'Express' });

      var options = {
        // global event notification;
        error: (error, e) => {
            if (e.cn) {
                // A connection-related error;
                //
                // Connections are reported back with the password hashed,
                // for safe errors logging, without exposing passwords.
                console.log("CN:", e.cn);
                console.log("EVENT:", error.message || error);
            }
        }
      };

      var pgp = require("pg-promise")(options);

      // using an invalid connection string:
      var db = pgp('postgres://jpmhduitnpghaa:851c09855046341005af0a67700ae90818d97b5c6693dc29a27542ac07d175f0@ec2-54-235-92-244.compute-1.amazonaws.com:5432/djasvd65pl9id');

      db.connect()
      .then(obj => {
        res.json({on:"Success"})
          console.log("***-> Connetion is success", obj)
          obj.done(); // success, release the connection;
      })
      .catch(error => {
        res.json({on:error.message})
          console.log("***-> ERROR:", error.message || error);
      });

     
});

module.exports = router;
