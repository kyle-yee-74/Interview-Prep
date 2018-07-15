/*
  Write a program which takes as input two sorted arrays, and returns
  a new array containing elements that are present in both of the
  input arrays. The input arrays may have duplicate entries, but
  the returned array should be free of duplicates. For example, the
  input is [2,3,3,5,5,6,7,7,8,12] and [5,5,6,8,8,9,10,10], your
  output should be [5,6,8].
   */

// Time: O(n+m), Space: O(1)
const computeIntersection = (array1, array2) => {
  let output = new Set()
  let i = 0
  let j = 0

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) ++i
    else if (array2[j] < array1[i]) ++j
    else {
      output.add(array1[i])
      ++i
      ++j
    }
  }
  return output
}

module.exports = {computeIntersection}
