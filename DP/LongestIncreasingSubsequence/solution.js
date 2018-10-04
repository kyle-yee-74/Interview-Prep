// Time: O(n^2) | Space: O(n)
const longestIncreasingSubsequence1 = (arr) => {
  const subarrays = [];
  for (let h = 0; h < arr.length; ++h) {
    subarrays.push([null, 1]);
  }
  let longestLength = 1;
  let longestIndex = 0;
  for (let i = 1; i < arr.length; ++i) {
    const currentNum = arr[i];
    for (let j = 0; j < i; ++j) {
      if (currentNum > arr[j] && subarrays[j][1] + 1 > subarrays[i][1]) {
        subarrays[i][0] = j;
        subarrays[i][1] = subarrays[j][1] + 1;
      }
    }
    if (subarrays[i][1] > longestLength) {
      longestLength = subarrays[i][1];
      longestIndex = i;
    }
  }
  return buildOutSequence(arr, longestIndex, subarrays);
};

const buildOutSequence = (arr, i, subarrays) => {
  const output = [];
  output.push(arr[i]);
  while (subarrays[i][0]) {
    output.unshift(arr[subarrays[i][0]]);
    i = subarrays[i][0];
  }
  return output;
};

// Time: O(n*log(n)) | Space: O(n)
const longestIncreasingSubsequence2 = (arr) => {
  const sequences = new Array(arr.length);
  const indicies = new Array(arr.length + 1);
  let length = 0;
  for (let i = 0; i < arr.length; ++i) {
    const num = arr[i];
    const newLength = binarySearch(1, length, indicies, arr, num);
    sequences[i] = indicies[newLength - 1];
    indicies[newLength] = i;
    length = Math.max(length, newLength);
  }
  return buildSequence(arr, sequences, indicies[length]);
};

const binarySearch = (start, end, indicies, arr, num) => {
  if (start > end) return start;
  const middle = Math.floor((start + end) / 2);
  if (arr[indicies[middle]] < num) {
    start = middle + 1;
  } else {
    end = middle - 1;
  }
  return binarySearch(start, end, indicies, arr, num);
};

const buildSequence = (array, sequences, currentIdx) => {
  const sequence = [];
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx]);
    currentIdx = sequences[currentIdx];
  }
  return sequence;
};

module.exports = { longestIncreasingSubsequence1, longestIncreasingSubsequence2 }