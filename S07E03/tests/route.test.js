const request = require('supertest')

const server = require('../server/server')

test('fish route returns 12 fish', () => {
  expect.assertions(1)
  const expected = 12
  return request(server)
    .get('/api/v1/fish')
    .then(res => {
      expect(res.body.length).toBe(expected)
    })
})
