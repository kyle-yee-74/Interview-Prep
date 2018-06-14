// Using JS methods

function reverseStringWithMethods (str) {
  let output = str.split('').reverse().join('')
  return output
}

// Iteratively

function reverseStringIteratively (str) {
  let reversedString = ''
  for (let i = str.length - 1; i >= 0; --i) {
    reversedString += str[i]
  }
  return reversedString
}

// Recursion

function reverseStringRecursively (str) {
  if (str === '') {
    return ''
  }
  return reverseStringRecursively(str.substr(1)) + str.charAt(0)
}

module.exports = {reverseStringWithMethods, reverseStringIteratively, reverseStringRecursively}
