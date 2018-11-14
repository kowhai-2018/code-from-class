const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  db.getWidgets()
    .then(widgets => res.json(widgets))
    .catch(err => res.status(400).json({ error: err.message }))
})

router.get('/:id', (req, res) => {
  const widgetId = Number(req.params.id)
  db.getWidget(widgetId)
    .then(widget => res.json(widget))
    .catch(err => res.status(400).json({ error: err.message }))
})

router.post('/', (req, res) => {
  db.saveWidget(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => res.status(400).json({ error: err.message }))
})

router.delete('/:id', (req, res) => {
  // http://localhost:3000/api/v1/widgets/123
  const widgetId = Number(req.params.id)
  db.deleteWidget(widgetId)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json({ error: err.message }))
})

router.put('/:id', (req, res) => {
  const widget = req.body
  db.updateWidget(widget)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json({ error: err.message }))
})
module.exports = router
