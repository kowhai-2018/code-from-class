const db = require('../server/db')

test('db file exists', () => {
  expect(db).not.toBe(undefined)
})

test('getFish returns some fish', () => {
  expect.assertions(1)
  const expected = 12
  return db.getFish()
    .then(fish => {
      expect(fish.length).toBe(expected)
    })
})
