/*
  Write a program for the knapsack problem that selects a subset of items that has
  maximum value and satisfies the weight constraint. All items have integer weights
  and values. Return the value of the subset and indicies of each item picked.
*/

// Time: O(n*m) | Space: O(n*m) | n = number of items | m = max weight
const knapsack = (items, maxWeight) => {
  const knapsackValues = []
  for (let i = 0; i < items.length + 1; ++i) {
    const row = (new Array(maxWeight + 1)).fill(0)
    knapsackValues.push(row)
  }

  for (let i = 1; i < items.length + 1; ++i) {
    const currentWeight = items[i - 1][1]
    const currentValue = items[i - 1][0]
    for (let w = 0; w <= maxWeight; ++w) {
      if (currentWeight > w) {
        knapsackValues[i][w] = knapsackValues[i - 1][w]
      } else {
        knapsackValues[i][w] = Math.max(knapsackValues[i - 1][w], knapsackValues[i - 1][w - currentWeight] + currentValue)
      }
    }
  }
  return [knapsackValues[items.length][maxWeight], getKnapsackItems(knapsackValues, items)]
}

const getKnapsackItems = (knapsackValues, items) => {
  const sequence = []
  let itemIdx = knapsackValues.length - 1
  let weightIdx = knapsackValues[0].length - 1

  while (itemIdx > 0) {
    if (knapsackValues[itemIdx][weightIdx] === knapsackValues[itemIdx - 1][weightIdx]) {
      --itemIdx
    } else {
      sequence.unshift(items[itemIdx - 1])
      weightIdx -= items[itemIdx - 1][1]
      --itemIdx
    }
    if (weightIdx === 0) break
  }
  return sequence
}

module.exports = {knapsack}
