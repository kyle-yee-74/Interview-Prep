/*
  Write a program that takes an arithmetical expression in Reverse Polish Notatioin (RPN)
  and returns the number that the expression evaluates to.
*/

// Time: O(n) | Space: O(n) | n = the length of the string
const evaluateRPN = (str) => {
  const operation = {
    '+': function (a, b) { return Number(b) + Number(a) },
    '-': function (a, b) { return Number(b) - Number(a) },
    'x': function (a, b) { return Number(b) * Number(a) },
    '/': function (a, b) { return Number(b) / Number(a) }
  }

  if (!str.length) return null
  const stack = []

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === ',') continue
    if (str[i] === '-' && str[i + 1] && typeof Number(str[i + 1]) === 'number') {
      const negativeNum = str[i] + str[i + 1]
      stack.push(negativeNum)
      ++i
      continue
    }
    if (str[i] in operation) stack.push(operation[str[i]](stack.pop(), stack.pop()))
    else stack.push(str[i])
  }
  return stack[0]
}

module.exports = {evaluateRPN}
