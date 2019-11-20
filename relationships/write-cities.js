const {db, City} = require('./connect')

async function write() {
  await db.sync()
  await City.create({
    name: 'Mumbai', population: 600000000, countryId: 6
  })
  // await City.bulkCreate([
  //   {name: 'Mumbai', population: 600000000, countryId: 1},
  //   {name: 'Bangalore', population: 500000000, countryId: 1},
  //   {name: 'Sao Paulo', population: 400000000, countryId: 4},
  //   {name: 'London', population: 5000000, countryId: 3},
  //   {name: 'Manchester', population: 3000000, countryId: 3}
  // ])
  await db.close()
}

write()
