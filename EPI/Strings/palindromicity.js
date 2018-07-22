/*
  Implement a function which takes as input a string s and returns true if s is a
  palindromic string.
*/

// Time: O(n) | Space: O(1) | n = length of string
const palindromicity = (str) => {
  let start = 0
  let end = str.length - 1
  str = str.toLowerCase()
  while (start < end) {
    if (str[start] !== str[end]) return false
    ++start
    --end
  }
  return true
}

module.exports = {palindromicity}
