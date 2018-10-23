const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const fooRouter = require('./routes/foo')
const colorRouter = require('./routes/colors')

// configuration
const hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'
}
server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')
server.use('/foo', fooRouter)
server.use('/colors', colorRouter)

// routes
server.get('/', (req, res) => {
  console.log('Root route hit')
  const data = {title: 'Kōwhai'}
  res.render('home', data)
})

module.exports = server
