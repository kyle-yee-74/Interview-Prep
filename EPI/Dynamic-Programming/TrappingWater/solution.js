const trap = function(height) {
  const maxLeftHeights = [];
  for (let h = 0; h < height.length; ++h) {
    maxLeftHeights.push(0);
  }
  let maxHeight = 0;
  let total = 0;
  for (let i = 0; i < height.length; ++i) {
    if (maxLeftHeights[i - 1] !== undefined) {
      maxHeight = Math.max(maxHeight, height[i - 1]);
    }
    maxLeftHeights[i] = maxHeight;
  }
  let maxHeightRight = 0;
  for (let j = height.length - 1; j >= 0; --j) {
    if (maxLeftHeights[j + 1] !== undefined) {
      maxHeightRight = Math.max(maxHeightRight, height[j + 1]);
    }
    if (maxHeightRight === 0) {
      continue;
    }
    let result = Math.min(maxHeightRight, maxLeftHeights[j]) - height[j];
    if (result < 0) {
      continue;
    }
    else {
      total += result;
    }
  }
  return total;
};

module.exports = { trap }