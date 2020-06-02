const {sum, subtract} = require('../math')

const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      } else {
        console.log(`${actual} is equal to ${expected}`)
      }
    }
  }
}

const test = (title, callback) => {
  try {
    callback()
    console.log(`⚡️ ${title}`)
  } catch (error) {
    console.error(`☠️ ${title}`)
    console.error(error)
  }
}

const sumTest = () => {
  const result = sum(3, 7)
  const expected = 10
  
  expect(result).toBe(expected);
}

test('sum adds numbers', sumTest)

const subtractTest = () => {
  const result = subtract(7, 3)
  const expected = 4
  
  expect(result).toBe(expected);
}

test('subtract subtracts numbers', subtractTest)