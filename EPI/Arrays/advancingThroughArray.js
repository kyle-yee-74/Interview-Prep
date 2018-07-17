/*
  Write a program which takes an array of n integers, where A[i] denotes the maximum
  you can advance from index i, and returns whether it is possible to advance to the
  last index starting from the beginning of the array.
*/

// Time: O(n) | Space: O(1)
const advancingThroughArray = (array) => {
  let maxJump = 0
  const lastPosition = array.length - 1
  for (let i = 0; i < array.length; ++i) {
    if (maxJump >= lastPosition) return true
    if (array[i] + i > maxJump) maxJump = array[i] + i
    if (maxJump === i) return false
  }
  return false
}

module.exports = {advancingThroughArray}
