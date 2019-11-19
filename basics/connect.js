const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'awesomedb',
  username: 'awesomeuser',
  password: 'awesomepass'
})

async function connect() {
  await db.authenticate()
  await db.close()
}

connect()
