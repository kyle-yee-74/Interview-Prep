/*
  Write a program which takes as input two sorted arrays, and returns
  a new array containing elements that are present in both of the
  input arrays. The input arrays may have duplicate entries, but
  the returned array should be free of duplicates. For example, the
  input is [2,3,3,5,5,6,7,7,8,12] and [5,5,6,8,8,9,10,10], your
  output should be [5,6,8].
   */

// Time: O(n + m), Space: O(m)
// n - larger array, m - smaller array
const computeIntersection = (array1, array2) => {
  let output = []
  let i = 0
  let j = 0

  while (i < array1.length && j < array2.length) {
    if (array1[i - 1] && array1[i] === array1[i - 1]) ++i
    else if (array2[j - 1] && array2[j] === array2[j - 1]) ++j
    else if (array1[i] < array2[j]) ++i
    else if (array2[j] < array1[i]) ++j
    else {
      output.push(array1[i])
      ++i
      ++j
    }
  }
  return output
}

module.exports = {computeIntersection}
