
const countingSort = (array) => {
  if (array.length < 2) return array

  let lowest = array[0]
  let highest = array[0]
  let count = []

  array.forEach(num => {
    if (num < lowest) lowest = num
    if (num > highest) highest = num
  })

  for (let i = lowest; i <= highest; ++i) {
    count[i] = 0
  }

  for (let j = 0; j < array.length; ++j) {
    ++count[array[j]]
  }

  let output = new Array(array.length)
  let n = 0

  for (let k = lowest; k <= highest; ++k) {
    while (count[k]) {
      output[n] = k
      ++n
      --count[k]
    }
  }
  return output
}

module.exports = {countingSort}
