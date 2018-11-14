const knex = require('knex')
const config = require('../knexfile.js')['development']
const connection = knex(config)

module.exports = {
  deleteWidget,
  getWidget,
  getWidgets,
  saveWidget,
  updateWidget
}

function getWidgets (db = connection) {
  return db('widgets')
}

function getWidget (id, db = connection) {
  return db('widgets')
    .where('id', id)
    .first()
}

function saveWidget (widget, db = connection) {
  return db('widgets')
    .insert(widget)
}

function deleteWidget (id, db = connection) {
  return db('widgets')
    .delete()
    .where('id', id)
}

function updateWidget (widget, db = connection) {
  return db('widgets')
    .update(widget)
    .where('id', widget.id)
}
