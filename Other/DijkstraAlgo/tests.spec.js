const { dijkstraAlgorithm } = require('./solution')

const graph = {
  S: {A: 5, B: 2},
  A: {C: 4, D: 2},
  B: {A: 8, D: 7},
  C: {D: 6, E: 3},
  D: {E: 1},
  E: {}
};

test(`Dijkstra's Algorithm #1`, () => {
  expect(dijkstraAlgorithm(graph, 'S', 'E')).toEqual({ cost: 8, path: [ 'S', 'A', 'D', 'E' ] });
})
