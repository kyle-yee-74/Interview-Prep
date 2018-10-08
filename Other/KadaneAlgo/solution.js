// Time: O(n) | Space: O(1) | n = length of the array
function kadanesAlgorithm (array) {
  let maxSoFar = array[0];
  let maxEndingHere = array[0];
  for (let i = 1; i < array.length; ++i) {
    const num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}

module.exports = { kadanesAlgorithm }