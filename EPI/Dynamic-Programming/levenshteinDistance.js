/*
  Write a program that takes two strings and computes the minimum number of edits
  needed to transform the first string into the second string.
*/

// Time: O(n*m) | Space: O(n*m) | n = string 1 length | m = string 2 length
const levenshteinDistance = (str1, str2) => {
  
  const cache = []
  for (let i = 0; i <= str1.length; ++i) {
    let row = []
    for (let j = 0; j <= str2.length; ++j) {
      row.push(0)
    }
    cache.push(row)
  }

  for (let i = 1; i <= str1.length; ++i) {
    cache[i][0] = i
  }

  for (let j = 1; j <= str2.length; ++j) {
    cache[0][j] = j
  }

  for (let i = 1; i <= str1.length; ++i) {
    let currentRow = cache[i]
    for (let j = 1; j <= str2.length; ++j) {
      if (str1[i - 1] === str2[j - 1]) {
        currentRow[j] = cache[i - 1][j - 1]
      } else {
        currentRow[j] = 1 + Math.min(cache[i - 1][j - 1], cache[i][j - 1], cache[i - 1][j])
      }
    }
  }

  return cache[str1.length][str2.length]
}

module.exports = {levenshteinDistance}
