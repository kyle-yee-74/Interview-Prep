/*
  Design an algorithm for computing the LCA of two nodes in a
  binary tree in which nodes do not have a parent field.
*/

// Time: O(n) | Space: O(h) | n = nodes | h = height of tree
const lowestCommonAncestor = (head, node1, node2) => {
  let lca = null
  const pathToNode1 = []
  const pathToNode2 = []

  if (!pathToNode(head, node1, pathToNode1) ||
      !pathToNode(head, node2, pathToNode2)) return null

  let i = 0

  while (i < pathToNode1.length && i < pathToNode2.length) {
    if (pathToNode1[i] !== pathToNode2[i]) break
    lca = pathToNode1[i]
    ++i
  }
  return lca
}

const pathToNode = (head, node, path) => {
  if (head === null) return false
  path.push(head.value)

  if (head.value === node.value) return true
  if ((head.left && pathToNode(head.left, node, path)) ||
      (head.right && pathToNode(head.right, node, path))) return true

  path.pop()
  return false
}

module.exports = {lowestCommonAncestor}
