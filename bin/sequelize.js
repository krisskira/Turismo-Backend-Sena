const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('djasvd65pl9id', 'jpmhduitnpghaa', '851c09855046341005af0a67700ae90818d97b5c6693dc29a27542ac07d175f0', {
  host: 'ec2-54-235-92-244.compute-1.amazonaws.com',
  dialect: 'postgres'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const checkConnection = async () => {
    try{
        let resp = await sequelize.authenticate()
        console.log("conection is success", resp)
        return "conection is success: " + resp
    }
    catch( error ){
        console.log("Oops: ", error)
        return "Oops error: " + error.message
    }
}

module.exports = {
    Sequelize, sequelize, checkConnection
}



