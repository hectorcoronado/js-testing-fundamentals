const {sum, subtract} = require('../math')

let result, expected

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

result = sum(3, 7)
expected = 10

expect(result).toBe(expected);

result = subtract(7, 3)
expected = 4

expect(result).toBe(expected);