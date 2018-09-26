const calcEquation = (equations, values, queries) => {
  const graph = buildGraph(equations, values);
  const output = [];
  for (let i = 0; i < queries.length; ++i) {
    const val1 = queries[i][0];
    const val2 = queries[i][1];
    if (!graph[val1] || !graph[val2]) {
      output.push(-1.0);
    } else if (val1 === val2) {
      output.push(1.0);
    } else if (graph[val1].get(val2) === undefined) {
      output.push(bfsGraph(graph, val1, val2));
    } else {
      output.push(graph[val1].get(val2));
    }
  }
  return output;
};

const buildGraph = (equations, values) => {
  const graph = {};
  for (let i = 0; i < equations.length; ++i) {
    addEdge(equations[i][0], equations[i][1], values[i], graph);
    addEdge(equations[i][1], equations[i][0], 1/values[i], graph);
  }
  return graph;
};

const addEdge = (start, end, value, graph) => {
  if (graph[start] === undefined) {
    graph[start] = new Map();
  }
  graph[start].set(end, value);
};

const bfsGraph = (graph, start, target) => {
  const queue = [[start, 1.0]];
  const visited = new Set();
  while (queue.length) {
    const currentNode = queue.shift();
    const key = currentNode[0];
    const value = currentNode[1];
    if (key === target) {
      return value;
    }
    visited.add(key);
    const neighbors = graph[key].keys();
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, graph[key].get(neighbor) * value]);
      }
    }
  }
  return -1.0;
};

module.exports = { calcEquation }
