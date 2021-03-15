/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function (n, edges) {
  const map = {};

  edges.forEach((edge) => {
    if (!map[edge[0]]) {
      map[edge[0]] = { distance: Infinity, routes: {}, visited: false };
    }
    map[edge[0]].routes[edge[1]] = edge[2];
    if (edge[0] === n) map[edge[0]].distance = 0;
    if (!map[edge[1]]) {
      map[edge[1]] = { distance: Infinity, routes: {}, visited: false };
    }
    map[edge[1]].routes[edge[0]] = edge[2];
    if (edge[1] === n) map[edge[1]].distance = 0;
  });

  let visited = [];
  const unvisited = [...Array(n + 1).keys()].slice(1);

  const getDistance = (node) => {
    visited.push(unvisited.splice(unvisited.indexOf(node), 1)[0]);
    map[node].visited = true;

    Object.entries(map[node].routes).forEach((route) => {
      if (map[route[0]].visited) return;
      if (map[node].distance + route[1] < map[route[0]].distance) {
        map[route[0]].distance = map[node].distance + route[1];
      }
    });

    const next = unvisited.reduce(
      (memo, route) => {
        if (map[route].distance < memo[1]) return [route, map[route].distance];
        else return memo;
      },
      [null, Infinity]
    )[0];

    if (next) getDistance(next);
  };

  getDistance(unvisited[unvisited.length - 1]);

  visited = {};
  const finishNodes = {};
  let paths = 0;
  (function count(node) {
    if (parseInt(node) === n) {
      Object.keys(visited).forEach((visitedNode) => {
        // Every node within here provides a path if hit
        // If we hit that path again from another direction, we can add its
        // previously calculated number of paths, and denote it as providing an additional path
        if (visitedNode !== "1") {
          if (!finishNodes[visitedNode]) {
            finishNodes[visitedNode] = 1;
          } else {
            finishNodes[visitedNode]++;
          }
        }
      });
      return paths++;
    }
    if (finishNodes[node]) {
      paths += finishNodes[node];
      Object.keys(visited).forEach((visitedNode) => {
        if (visitedNode !== "1") {
          if (!finishNodes[visitedNode]) {
            finishNodes[visitedNode] = finishNodes[node];
          } else {
            finishNodes[visitedNode] += finishNodes[node];
          }
        }
      });
      return;
    }
    visited[node] = true;

    Object.keys(map[node].routes)
      .sort((a, b) => b - a)
      .filter((route) => map[node].distance > map[route].distance)
      .forEach((route) => count(route));

    delete visited[node];
  })(1);

  return paths;
};

countRestrictedPaths(6, [
  [2, 1, 3574],
  [4, 3, 1378],
  [1, 5, 38739],
  [6, 1, 95222],
  [5, 4, 78194],
  [4, 6, 41976],
  [1, 4, 58963],
  [4, 2, 51285],
  [2, 3, 41063],
  [2, 6, 52240],
  [5, 6, 8253],
  [3, 6, 8414],
  [5, 3, 41596],
  [1, 3, 78833],
]);
