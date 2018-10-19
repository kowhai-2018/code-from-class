const express = require('express')
const server = express()

module.exports = server

server.use(express.static('public'))

server.get('/', function (req, res) {
  console.log('Hitting root route')
  res.status(200).send('<h1>Coding is fun</h1>')
})

server.get('/faq', (req, res) => {
  console.log('Hitting /faq route')
  res.status(200).send('This is an FAQ')
})

// server.get('/bob', (req, res) => {
//   console.log('Hitting /bob route')
//   res.status(200).send('Hi Bob')
// })
