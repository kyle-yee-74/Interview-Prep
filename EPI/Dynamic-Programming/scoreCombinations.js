/*
  Write a program that takes a final score and scores for individual plays, and returns
  the number of combinations of plays that result in the final score.
*/

// Time: O(n*m) | Space: O(n) | n = final score | m = number of plays
const scoreCombinations = (finalScore, plays) => {

  const scores = new Array(finalScore + 1).fill(0)
  scores[0] = 1

  for (let i = 0; i < plays.length; ++i) {
    for (let j = 1; j <= finalScore; ++j) {
      if (plays[i] <= j) {
        scores[j] += scores[j - plays[i]]
      }
    }
  }
  return scores[finalScore]
}

module.exports = {scoreCombinations}
