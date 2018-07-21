/*
  Write a program which takes as input an array of digits encoding a decimal number
  D and updates the array to represent the number D + 1. For example, if the input
  is [1,2,9] then you should update the array to [1,3,0]. Your algorithm should work
  even if it is implemented in a language that has finite-precision arithmetic.
*/

// Time: O(n) | Space: O(1)
const incrementInteger = (array) => {
  let carry = 0
  let arrLen = array.length - 1
  for (let i = arrLen; i >= 0; --i) {
    let currentDigit = i === arrLen ? array[i] + 1 : array[i] + carry
    carry = Math.floor(currentDigit / 10)
    array[i] = currentDigit % 10
  }
  if (carry > 0) array.unshift(carry)
  return array
}

module.exports = {incrementInteger}
