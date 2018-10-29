const express = require('express')
const hbs = require('express-handlebars')
const knex = require('knex')
const config = require('./knexfile')['development']

const db = knex(config)
const server = express()

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.get('/', (req, res) => {
  db('users')
    .join('profiles', 'users.id', '=', 'profiles.user_id')
    .select('users.id', 'email', 'bio', 'avatar')
    .then(users => {
      res.render('profiles', { users })
    })
    .catch(e => res.send('Hey, something bad happened. We don\'t know what. Please don\'t be mad.'))
})

module.exports = server
