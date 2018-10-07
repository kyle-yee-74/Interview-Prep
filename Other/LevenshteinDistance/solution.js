// Time: O(n*m) | Space: O(n*m) | n = length of str1 | m = length of str2
function levenshteinDistance(str1, str2) {
  const edits = [];
  for (let i = 0; i < str2.length + 1; ++i) {
    const row = [];
    for (let j = 0; j < str1.length + 1; ++j) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }

  for (let i = 1; i < str2.length + 1; ++i) {
    for (let j = 1; j < str1.length + 1; ++j) {
      if (str1[j - 1] === str2[i - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
}

module.exports = { levenshteinDistance }