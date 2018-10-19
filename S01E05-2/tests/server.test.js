const server = require('../server')
const request = require('supertest')

test('All systems are go', function () {
  expect(true).toBeTruthy()
})

test("'/' route succeeded", done => {
  request(server)
    .get('/')
    .end((err, res) => {
      // console.log('res.text:', res.text)
      expect(err).toBe(null)
      expect(res.status).toBe(200)
      done()
    })
})

test("'/bob' returns 'bob'", done => {
  request(server)
    .get('/bob')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.status).toBe(200)
      expect(res.text).toMatch('bob') // toMatch function in Jest -> matches in the string
      done()
    })
})
