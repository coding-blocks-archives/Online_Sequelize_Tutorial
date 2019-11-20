const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'awesomedb',
  username: 'awesomeuser',
  password: 'awesomepass'
})

const Country = db.define('country', {
  name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  code: {
    type: Sequelize.STRING(2),
    allowNull: false
  },
})

const City = db.define('city', {
  name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  population: {
    type: Sequelize.INTEGER
  }
})

City.belongsTo(Country)
Country.hasMany(City)

module.exports = {
  db, City, Country
}
