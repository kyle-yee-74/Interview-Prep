// Time: O(n*m*8^s+w*s) | Space: O(n*m + w*s) | n = row, m = col, w = number of words, s = length of longest word

const boggleBoard = (board, words) => {
  const trie = new Trie();
  for (const word of words) {
    trie.add(word);
  }
  const visited = board.map(row => row.map(letter => false));
  const output = {};
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      explore(i, j, board, trie.root, visited, output);
    }
  }
  return Object.keys(output);
}

const explore = (i, j, board, trieNode, visited, output) => {
  if (visited[i][j]) return;
  const letter = board[i][j];
  if (!trieNode[letter]) return;
  visited[i][j] = true;
  trieNode = trieNode[letter];
  if ('*' in trieNode) {
    output[trieNode['*']] = true;
  }
  const neighbors = findNeighbors(i, j, board);
  for (const neighbor of neighbors) {
    explore(neighbor[0], neighbor[1], board, trieNode, visited, output);
  }
  visited[i][j] = false;
}

const findNeighbors = (i, j, board) => {
  const result = [];
  if (i > 0 && j > 0) {
    result.push([i - 1, j - 1]);
  }
  if (i > 0 && j < board[0].length - 1) {
    result.push([i - 1, j + 1]);
  }
  if (i < board.length - 1 && j > 0) {
    result.push([i + 1, j - 1]);
  }
  if (i < board.length - 1 && j < board[0].length - 1) {
    result.push([i + 1, j + 1]);
  }
  if (i > 0) {
    result.push([i - 1, j]);
  }
  if (i < board.length - 1) {
    result.push([i + 1, j]);
  }
  if (j > 0) {
    result.push([i, j - 1]);
  }
  if (j < board[0].length - 1) {
    result.push([i, j + 1]);
  }
  return result;
}

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }
  
  add(word) {
    let current = this.root;
    for (const letter of word) {
      if (!current[letter]) {
        current[letter] = {};
      }
      current = current[letter];
    }
    current[this.endSymbol] = word;
  }
}

module.exports = { boggleBoard }