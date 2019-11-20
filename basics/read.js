const { db, AwesomePlaces } = require('./connect')

async function listPlaces() {
  await db.sync()

  const places = await AwesomePlaces.findAll({
    attributes: ['name', 'score'],
    where: {
      score: 7,
    },
  })

  places.forEach((p) => {
    console.log(`${p.name} \t\t ${p.score}`)
  })
}

listPlaces()
