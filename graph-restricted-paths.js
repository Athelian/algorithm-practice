/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function (n, edges) {
  const map = {};

  edges.forEach((edge) => {
    if (!map[edge[0]]) {
      map[edge[0]] = { distance: 0, routes: {} };
    }
    map[edge[0]].routes[edge[1]] = edge[2];
    if (!map[edge[1]]) {
      map[edge[1]] = { distance: 0, routes: {} };
    }
    map[edge[1]].routes[edge[0]] = edge[2];
  });

  const visited = {};
  const getDistance = (node) => {
    // We want to do the same as before but check every single path available
    // to node, it will form a tree, where the edges are a processed neighbor
    if (parseInt(node) === n) return 0;
    visited[node] = true;
    let min = 9999999;
    let counter = 0;

    Object.keys(map[node].routes).forEach((route) => {
      if (visited[route]) return;
      if (queue.indexOf(route) < 0 && !map[route].distance) queue.push(route);
      if (parseInt(route) === n) {
        // If the route is the final node... end
        if (map[node].routes[route] < min) {
          min = map[node].routes[route];
        }
      } else if (map[route].distance) {
        // If the route is already calculated... end
        if (map[node].routes[route] + map[route].distance < min) {
          min = map[node].routes[route] + map[route].distance;
        }
      } else {
        counter += map[node].routes[route];
        const routeValue = getDistance(route);
        if (routeValue + counter < min) {
          min = counter + routeValue;
        }
        counter -= map[node].routes[route];
      }
    });
    delete visited[node];

    return min;
  };

  const queue = [...Object.keys(map[n].routes)];
  while (queue.length) {
    const next = queue.shift();
    map[next].distance = getDistance(next);
  }

  let paths = 0;
  (function count(node) {
    Object.keys(map[node].routes).forEach((route) => {
      if (parseInt(route) === n) return paths++;
      if (map[node].distance > map[route].distance) {
        count(route);
      }
    });
  })(1);

  return paths;
};

countRestrictedPaths(10, [
  [9, 10, 8],
  [9, 6, 5],
  [1, 5, 9],
  [6, 8, 10],
  [1, 8, 1],
  [8, 10, 7],
  [10, 7, 9],
  [5, 7, 3],
  [4, 2, 9],
  [2, 3, 9],
  [3, 10, 4],
  [1, 4, 7],
  [7, 6, 1],
  [3, 9, 8],
  [9, 1, 6],
  [4, 7, 10],
  [9, 4, 9],
]);
