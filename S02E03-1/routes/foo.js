const express = require('express')
const router = express.Router()

const colors = require('../colors')
const jsonColors = require('../jColors')
// console.log('colors:', colors)
// console.log('jsonColors:', jsonColors)

router.get('/', (req, res) => {
  console.log('/foo route hit')
  const data = {title: 'Foo'}
  res.render('home', data)
})

router.get('/bar', (req, res) => {
  console.log('/foo/bar route hit')
  const data = {title: 'Foo bar'}
  res.render('home', data)
})

router.get('/bar/foo', (req, res) => {
  console.log('/foo/bar/foo route hit')
  const data = {title: 'Foo bar foo'}
  res.render('home', data)
})

router.get('/foo', (req, res) => {
  console.log('/foo/foo route hit')
  const data = {title: 'Foo foo'}
  res.render('home', data)
})

module.exports = router
