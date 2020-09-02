const {sum, subtract} = require('../math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not ${expected}`)
      }
    },
    // you can add any number of assertions here:
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not greater than ${expected}`)
      }
    },
    toBeLessThan(expected) {
      if (actual >= expected) {
        throw new Error(`${actual} is not less than ${expected}`)
      }
    }
    // ...and so on!
  }
}
