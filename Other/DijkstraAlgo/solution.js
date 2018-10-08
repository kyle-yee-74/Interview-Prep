function dijkstraAlgorithm(graph, start, end) {
  const costs = Object.assign({end: Infinity}, graph[start]);
  const parents = {};
  parents[end] = null;

  for (const child in graph[start]) {
    parents[child] = start;
  }

  const visited = [];
  let currentNode = lowestCostNode(costs, visited);

  while (currentNode) {
    const cost = costs[currentNode];
    const children = graph[currentNode];

    for (const child in children) {
      const newCost = cost + children[child];
      if (!costs[child] || costs[child] > newCost) {
        costs[child] = newCost;
        parents[child] = currentNode;
      }
    }
    visited.push(currentNode);
    currentNode = lowestCostNode(costs, visited);
  }

  const optimalPath = [end];
  let parent = parents[end];

  while (parent) {
    optimalPath.unshift(parent);
    parent = parents[parent];
  }
  const results = {
    cost: costs[end],
    path: optimalPath
  };
  return results;
}

function lowestCostNode (costs, visited) {
  return Object.keys(costs).reduce((lowest, node) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!visited.includes(node)) {
        lowest = node;
      }
    }
    return lowest;
  }, null);
};

module.exports = { dijkstraAlgorithm }
