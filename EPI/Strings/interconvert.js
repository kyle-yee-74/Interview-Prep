/*
  A string is a sequence of characters. A string may encode an integer, e.g., "123"
  encodes 123. In this problem, you are to implement methods that take a string
  representing an integer and return the corresponding integer, and vice versa. Your
  code should handle negative integers.
*/

// Time: O(n) | Space: O(1) | n = length of string
const interconvert = (num) => {
  if (typeof num === 'number') return `${num}`
  let output = 0
  for (let i = num < 0 ? 1 : 0; i < num.length; ++i) {
    output = output * 10 + Number(num[i])
  }
  return num.charAt(0) === '-' ? -output : output
}

module.exports = {interconvert}
