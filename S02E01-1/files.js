const fs = require('fs')

function getFiles (dir, callback) {
  fs.readdir(dir, callback)
}

function showFiles (err, files) {
  if (err) {
    console.error(err)
  } else {
    console.log('Files:')
    files.forEach(file => {
      console.log('  - ', file)
    })
  }
}

console.log('Before')
getFiles(__dirname, showFiles)
console.log('After')
