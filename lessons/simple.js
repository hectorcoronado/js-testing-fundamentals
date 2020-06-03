const {
  subtract,
  subtractAsync,
  sum,
  sumAsync
} = require('../math')

const sumTest = () => {
  const result = sum(3, 7)
  const expected = 10
  
  expect(result).toBe(expected)
}
test('sum adds numbers', sumTest)

const subtractTest = () => {
  const result = subtract(7, 3)
  const expected = 4
  
  expect(result).toBe(expected);
}
test('subtract subtracts numbers', subtractTest)

const asyncSubtractTest = async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
}
test('subtractAsync subtracts numbers asynchronously', asyncSubtractTest)

const asyncSumTest = async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
}
test('sumAsync adds numbers asynchronously', asyncSumTest)