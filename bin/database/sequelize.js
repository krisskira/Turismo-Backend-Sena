const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL)

const models = require('./models')
const Sites    = models.Sites(sequelize)
const Operators = models.Operators(sequelize)
const Hotels    = models.Hotels(sequelize)

module.exports = {
    Sequelize, sequelize, entities:{
        Sites,
        Operators,
        Hotels
    }
}





