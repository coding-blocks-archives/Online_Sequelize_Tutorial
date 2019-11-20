const { db, AwesomePlaces } = require('./connect')

async function addPlace(placeName, score) {

  await db.sync()
  await AwesomePlaces.create({
    name: placeName,
    score: score
  })
  await db.close()
}


addPlace('Zombieland', 1)
