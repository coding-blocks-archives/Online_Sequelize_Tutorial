const {db, Country} = require('./connect')

async function write() {
  await db.sync()
  // await Country.create({
  //   name: 'India', code: 'IN'
  // })
  await Country.bulkCreate([
    {name: 'U.S. of America', code: 'US'},
    {name: 'United Kingdom', code: 'UK'},
    {name: 'Brazil', code: 'BR'}
  ])
  await db.close()
}

write()
