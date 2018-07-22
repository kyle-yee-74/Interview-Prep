/*
  Write a program which takes as input an array of characters, and removes each 'b' and
  replaces each 'a' by two 'd's. Specifically, along with the array, you are provided an
  integer-valued size. Size denotes the number of entries of the array that the operation
  is to be applied to. You do not have to worry preserving about subsequent entries. For
  example, if the array is [a,b,a,c,null] and the size is 4, then you can return [d,d,d,d,c].
  You can assume there is enough space in the array to hold the final result.
*/

// Time: O(n) | Space: O(1) | n = length of array
const replaceRemove = (array, size) => {
  let notB = 0
  let counterA = 0
  for (let i = 0; i < size; ++i) {
    if (array[i] !== 'b') {
      array[notB] = array[i]
      ++notB
    }
    if (array[i] === 'a') ++counterA
  }
  let totalIndices = notB + counterA - 1
  let startIndex = notB - 1
  const finalSize = totalIndices + 1
  while (startIndex >= 0) {
    if (array[startIndex] === 'a') {
      array[totalIndices] = 'd'
      array[totalIndices - 1] = 'd'
      totalIndices -= 2
    } else {
      array[totalIndices] = array[startIndex]
      --totalIndices
    }
    --startIndex
  }
  return finalSize
}

module.exports = {replaceRemove}
