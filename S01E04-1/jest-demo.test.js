const addNumbers = require('./demo')

test('Jest is working correctly', function () {
  expect(true).toBe(true)
})

test('addNumbers can add 1 and 2', function () {
  // Arrange
  const num1 = 1
  const num2 = 2
  const expected = 3

  // Act
  const actual = addNumbers(num1, num2)

  // Assert
  expect(actual).toBe(expected)
})

test('addNumbers can add 3 and 4', function () {
  // Arrange
  const num1 = 3
  const num2 = 4
  const expected = 7

  // Act
  const actual = addNumbers(num1, num2)

  // Assert
  expect(actual).toBe(expected)
})
