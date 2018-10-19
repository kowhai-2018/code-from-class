const express = require('express')
const server = express()

module.exports = server
server.use(express.static('public'))

server.get('/', (req, res) => {
  res.status(200).send('So far, so good.')
})

server.get('/bob', (req, res) => {
  res.status(404).send('Hi bob!')
})
