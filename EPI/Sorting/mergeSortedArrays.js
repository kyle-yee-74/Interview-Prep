/*
  Write a program which takes as input two sorted arrays of integers, and updates the
  first to the combined entries of the two arrays in sorted order. Assume the first array
  has enough empty entries at its end to hold the result.
   */

// Time: O(n + m), Space: O(1)
const mergeSortedArrays = (array1, array2) => {
  let i = array2.length - 1
  let j = array1.length - 1

  for (let k = 0; k <= i; ++k) {
    array1.push(null)
  }

  let m = array1.length - 1
  while (m >= 0) {
    if (array2[i] > array1[j]) {
      array1[m] = array2[i]
      --i
    } else {
      if (j > -1) {
        array1[m] = array1[j]
        --j
      } else {
        array1[m] = array2[i]
        --i
      }
    }
    --m
  }
  return array1
}

module.exports = {mergeSortedArrays}
