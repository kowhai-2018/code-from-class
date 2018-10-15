const cowsay = require('cowsay')
const colors = require('colors')

const output = cowsay.think({
  text: 'Dairy milk is for baby cows',
  e: '88',
  T: 'xx'
})

const colouredOutput = colors.rainbow(output)

console.log(colouredOutput)
