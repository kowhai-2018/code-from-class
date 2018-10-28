const express = require('express')
const hbs = require('express-handlebars')

const server = express()

server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  const content = { greeting: 'Hi' }
  res.render('form', content)
})

server.post('/processform', (req, res) => {
  const results = {
    name: req.body.name,
    colour: req.body.colour
  }
  res.render('results', results)

  // Also try:
  //   res.redirect('/')
})

module.exports = server
