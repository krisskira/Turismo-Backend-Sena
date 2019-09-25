const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL)

//const models = require('../../models/Sites')
const Sites    = require('../../models/Sites')(sequelize)
const Operators = require('../../models/Operators')(sequelize)
const Hotels    = require('../../models/Hotels')(sequelize)

module.exports = {
    Sequelize, sequelize, entities:{
        Sites,
        Operators,
        Hotels
    }
}





