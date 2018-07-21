/*
  Write a program which takes as input a sorted array and updates it so that all
  duplicates have been removed and the remaining elements have been shifted left to fill the
  emptied indices. Return the number of valid elements.
*/

// Time: O(n) | Space: O(1)
const deleteDuplicates = (array) => {
  let validElements = 1
  for (let i = 1; i < array.length; ++i) {
    if (array[validElements - 1] !== array[i]) {
      array[validElements] = array[i]
      ++validElements
    }
  }
  return validElements
}

module.exports = {deleteDuplicates}
