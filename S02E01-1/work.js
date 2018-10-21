function startWork (callback) {
  console.log('Starting...')
  callback()
}

function doWork () {
  console.log('Doing work.')
}

function doMoreWork () {
  console.log('Working more.')
}

startWork(doWork)
startWork(doMoreWork)
