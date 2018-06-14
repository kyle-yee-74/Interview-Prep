// Loop twice, O(n^2) time, O(1) space
const allUniqueChars1 = function (string) {
  for (let i = 0; i < string.length; ++i) {
    for (let j = i + 1; j < string.length; ++j) {
      if (string[i] === string[j]) return false
    }
  }
  return true
}
// Use a Set, O(n) time, O(n) space
const allUniqueChars2 = function (string) {
  let set = new Set()
  for (const char of string) {
    if (set.has(char)) return false
    set.add(char)
  }
  return true
}
// Sort first, O(n*log(n)) time, O(1) space
const allUniqueChars3 = function (string) {
  string = string.split('').sort((a, b) => a - b).join('')
  for (let i = 0; i < string.length - 1; ++i) {
    if (string[i] === string[i + 1]) return false
  }
  return true
}

module.exports = {allUniqueChars1, allUniqueChars2, allUniqueChars3}
