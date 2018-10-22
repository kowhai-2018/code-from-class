const express = require('express')
const hbs = require('express-handlebars')
const server = express()

// configuration
const hbsConfig = {
  defaultLayout: 'main',
  extname: 'hbs'
}
server.engine('hbs', hbs(hbsConfig))
server.set('view engine', 'hbs')

// routes
server.get('/', (req, res) => {
  const userData = {
    professor: 'Charles Xavier',
    cohort: [
      {name: 'Logan', color: 'yellow'},
      {name: 'Scott Summers', color: 'red'},
      {name: 'Hank McCoy', color: 'blue'},
      {name: 'Jean Grey', color: 'magenta'}
    ]
  }
  res.render('home', userData)
})

module.exports = server
