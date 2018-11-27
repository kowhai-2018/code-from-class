const path = require('path')
const express = require('express')

const fish = require('./routes/fish')

const server = express()

server.use(express.json())
server.use('/api/v1/fish', fish)
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
