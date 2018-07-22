/*
  Write a program that performs base conversion. The input is a string, an integer b1, and
  another integer b2. The string represents be an integer in base b1. The output should
  be the string representing the integer in base b2. Assume 2 <= b1,b2 <= 16.
*/

/* Time: O(n*(1 + logb2(b1))) | Space: O(1) | n = length of num
  1) Perform n multiply and adds to get total from num
  2) Perform logb2(x) modulos and adds to get the result
    - x = b1^n | logb2(b1^n) === n*logb2(b1)
*/
const baseConversion = (num, b1, b2) => {
  let total = 0
  let expo = 0
  let isNegative = num[0] === '-' ? 1 : 0
  const cache = {
    'F': 15,
    'E': 14,
    'D': 13,
    'C': 12,
    'B': 11,
    'A': 10,
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F'
  }
  for (let i = num.length - 1; i >= isNegative; --i) {
    let currentNum = cache[num[i]] ? cache[num[i]] : num[i]
    total += currentNum * Math.pow(b1, expo)
    ++expo
  }
  let output = ''
  while (total !== 0) {
    let digit = total % b2 > 9 ? cache[total % b2] : total % b2
    output = digit + output
    total = Math.floor(total / b2)
  }
  return isNegative > 0 ? '-' + output : output
}

module.exports = {baseConversion}
