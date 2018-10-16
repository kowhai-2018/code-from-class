const cowsay = require('cowsay')
const colors = require('colors')

let output = cowsay.say({
  text: "Please don't eat my babies",
  e: '00',
  T: ' U'
})

output = colors.rainbow(output)
console.log(output)
