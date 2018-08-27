// Time: O(n) | Space: O(n) | n = length of the input array
const maxSubsetSum = (arr) => {
  if (arr.length < 2) return arr[0]
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1]

  const sets = arr.map(val => [val, val])
  if (arr[0] > arr[1]) sets[1][1] = arr[0]
  for (let i = 2; i < arr.length; ++i) {
    const currentNum = arr[i]

    // Caculate the current sum with the last non-adjacent index
    let currentSum = currentNum + sets[i - 2][0]

    // Caculate the sum of the max sum seen thus far
    let pastSum = currentNum + sets[i - 2][1]

    // Calculate the maxSum thus far against 4 data points
    sets[i][1] = Math.max(currentNum, currentSum, pastSum, sets[i - 1][1])
  }
  return sets[arr.length - 1][1]
}

module.exports = {maxSubsetSum}
