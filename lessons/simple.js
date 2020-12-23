const {sum, subtract} = require('../math')

// * The testing framework is to throw practical error messages for a developer
// when the result is not equal to the expected.
let result, expected

result = sum(3, 7)
expected = 10
// These statements can be abstracted like below:
// if (expect !== result) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

// * The assertion library is a set of function that returns object of assertion, attatched to the function for expectation.
function expect(actual) {
  // returns an object which has functions for assertion
  return {
//  * You don't need to specify the 'function' keyword when defining functions inside objects since es6.
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
// * How to encapsulate and isolate tests ?
// As you see above, if an error throws, it stops testing the rest of them.
// And although stack traces show which line throws the error, it isn't that directive.
// => That's where a testing framework comes into play. 
//    Testing framework ensures all the tests running in isolated and encapsulated, with more useful messages.
//    => see testing-framework.js