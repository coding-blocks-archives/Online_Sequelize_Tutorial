const {db, City, Country} = require('./connect')

async function write() {
  await db.sync()
  const cities = await City.findAll({
    attributes: ['name', 'population'],
    include: [{model: Country, attributes: ['name', 'code']}]
  })
  cities.forEach(city => {
    console.log(`
      ${city.name} \t ${city.population} \t ${city.country.name}
    `)
  });
  await db.close()
}

write()
