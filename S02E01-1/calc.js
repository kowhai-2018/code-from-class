function add (num1, num2) {
  console.log('add function')
  return num1 + num2
}

function printResult (result) {
  console.log(result)
}

function calculate (fn, num1, num2, callback) {
  console.log('calculate function')
  const result = fn(num1, num2)
  callback(result)
}

calculate(add, 4, 8, printResult)
