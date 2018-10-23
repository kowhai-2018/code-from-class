const server = require('../server')
const request = require('supertest')
const cheerio = require('cheerio')

test('All systems are go', () => {
  expect(true).toBeTruthy()
})

test('Root route works', (done) => {
  request(server)
    .get('/')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const actual = $('ul li').length
      expect(actual).toBe(4)
      done()
    })
})

test('/someone route works', (done) => {
  request(server)
    .get('/someone')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      expect($('h1.welcome').text()).toMatch('Turing')
      done()
    })
})

// SEND a request to the route
// WAIT for a response
// WHEN the response comes,
//    COMPARE it what with we expected it to be
