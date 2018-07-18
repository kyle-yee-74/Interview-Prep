/*
  Given two nodes in a binary tree, design an algorithm that computes their LCA.
  Assume that each node has a parent pointer.
*/

// Time: O(h) | Space: O(1) | h = height of tree
const lcaWithParentPointer = (node1, node2) => {
  let depth1 = findDepth(node1)
  let depth2 = findDepth(node2)
  if (depth2 > depth1) {
    let temp = node1
    node1 = node2
    node2 = temp
  }
  let depthDiff = Math.abs(depth1 - depth2)
  while (depthDiff > 0) {
    node1 = node1.parent
    --depthDiff
  }

  node1 = node1.parent
  node2 = node2.parent
  
  while (node1 !== node2) {
    node1 = node1.parent
    node2 = node2.parent
  }
  return node1
}

const findDepth = (node) => {
  let depth = 0
  while (node !== null) {
    node = node.parent
    ++depth
  }
  return depth
}

module.exports = {lcaWithParentPointer}
