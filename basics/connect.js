const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'awesomedb',
  username: 'awesomeuser',
  password: 'awesomepass'
})

const AwesomePlaces = db.define('awesome_place', {
  name: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 5
  }
})

module.exports = {
  db, AwesomePlaces
}
