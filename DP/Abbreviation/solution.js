const abbreviation = (a, b) => {
  const cache = []
  for (let i = 0; i < a.length + 1; ++i) {
    cache.push((new Array(b.length + 1)).fill(true))
  }

  for (let j = 0; j < a.length + 1; ++j) {
    for (let k = 0; k < b.length + 1; ++k) {
      if (j === 0 && k === 0) {
        continue
      } else if (j === 0) {
        cache[j][k] = false
      } else if (k === 0 && !isLowerCase(a[j - 1])) {
        cache[j][k] = false
      } else if (a[j - 1] === b[k - 1]) {
        cache[j][k] = cache[j - 1][k - 1]
      } else if (isLowerCase(a[j - 1]) && capitalCompare(a[j - 1], b[k - 1])) {
        cache[j][k] = cache[j - 1][k] || cache[j - 1][k - 1]
      } else if (isLowerCase(a[j - 1]) && !capitalCompare(a[j - 1], b[k - 1])) {
        cache[j][k] = cache[j - 1][k]
      } else {
        cache[j][k] = false
      }
    }
  }
  return cache[a.length][b.length]
}

const isLowerCase = (char) => {
  return char === char.toLowerCase()
}

const capitalCompare = (a, b) => {
  return a.toUpperCase() === b
}

module.exports = { abbreviation }
