/*
  Write a program which takes an integer and returns the integer corresponding to the
  digits of the input written in reverse order. For example, the reverse of 42 is 24, and
  the reverse of -314 is -413.
*/

// Time: O(n) | Space: O(1)
const reverseDigits = (num) => {
  let output = 0
  let currentNum = num < 0 ? num * (-1) : num

  while (currentNum > 0) {
    output = output * 10 + currentNum % 10
    currentNum = Math.floor(currentNum / 10)
  }
  return num < 0 ? output * (-1) : output
}

module.exports = {reverseDigits}
