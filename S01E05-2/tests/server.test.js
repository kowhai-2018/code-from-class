const server = require('../server')
const request = require('supertest')

test('All systems are go', () => {
  expect(true).toBeTruthy()
})

test('Root route succeeded', done => {
  request(server)
    .get('/')
    .end((err, res) => {
      // console.log('res.text: ' + res.text)
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})

test('FAQ route succeeded', done => {
  request(server)
    .get('/faq')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('FAQ')
      done()
    })
})

test('Test /bob route', done => {
  request(server)
    .get('/bob')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})
