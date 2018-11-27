const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFish()
    .then(fish => res.json(fish))
})

module.exports = router
