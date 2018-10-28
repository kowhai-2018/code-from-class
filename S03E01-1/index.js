const knex = require('knex')
const config = require('./knexfile').development

const conn = knex(config)

conn('tasks')
  .select('id', 'name', 'completed')
  .then(tasks => {
    tasks.forEach(task => {
      const id = task.id
      const name = task.name
      let completed = 'incomplete'
      if (task.completed) { completed = 'complete' }

      // Or do it with a ternary...
      // const completed = task.completed ? 'complete' : 'incomplete'
      console.log(id + ': ' + name + ' - ' + completed)

      // Or be lazy and chuck it all in one line!
      // console.log(task.id + ': ' + task.name + ' - ' + (task.completed ? 'complete' : 'incomplete'))
    })
  })
  .then(() => conn.destroy())
