// STRETCH
const cars = [
    {
      vin: '3FA6P0T91FR227101',
      make: 'toyota',
      model: 'prius',
      mileage: 215000,
      title: 'clean',
      transmission: 'manual',
    },

    {
      vin: '1HGES26791L081386',
      make: 'toyota',
      model: 'corolla',
      mileage: 115000,
      title: 'salvage',
    },
    {
      vin: '5LMEU88H44ZJ31302',
      make: 'toyota',
      model: 'focus',
      mileage: 15000,
    },
]
exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}