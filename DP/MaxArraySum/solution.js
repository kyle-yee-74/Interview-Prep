// Time: O(n) | Space: O(n) | n = length of the input array
const maxSubsetSum = (arr) => {
  if (arr.length < 2) return arr[0]
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1]

  const sets = arr.map(val => val)
  if (arr[0] > arr[1]) sets[1] = arr[0]
  for (let i = 2; i < arr.length; ++i) {
    const currentNum = arr[i]
    let currentSum = currentNum + sets[i - 2]
    sets[i] = Math.max(currentNum, currentSum, sets[i - 1])
  }
  return sets[arr.length - 1]
}

module.exports = {maxSubsetSum}
