const {sum, subtract} = require('../math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

// mini assertion library
function expect(actual) {
  // returns an object which has functions for assertion
  return {
//  You don't need to specify the 'function' keyword when defining functions inside objects since es6.
//  Before:
//    toBe: function toBe(expected) {}
//    toEqual: function toEqual(expected) {}
//    toBeGreaterThan: function toBeGreaterThan(expected) {}
//  After:
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {}
  }
}
