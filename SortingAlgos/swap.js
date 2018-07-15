
const swap = (array, idx1, idx2) => {
  const temp = array[idx1]
  array[idx1] = array[idx2]
  array[idx2] = temp
}

module.exports = {swap}
