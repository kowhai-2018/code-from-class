const express = require('express')
const jsonColors = require('../jColors')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('/colors route hit')
  const data = {
    title: 'Colors',
    colors: jsonColors.colors
  }
  console.log(data)
  res.render('colors', data)
})

router.post('/', (req, res) => {
  res.send('Hello')
})

module.exports = router
