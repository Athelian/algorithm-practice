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

  // Mark the final node as completed, even though it has no value
  map[n].distance = 0;

  const getDistance = (node) => {
    const completedNeighbors = [];
    // Add all of it's children to the queue
    Object.keys(map[node].routes).forEach((route) => {
      // If the route has been processed already, mark it for comparison later on
      map[route].distance || parseInt(route) === n
        ? completedNeighbors.push(route)
        : queue.push(route);
    });
    // Now we have added all the siblings to the queue, and found all the processed siblings
    // Now we need to find the best route, which will be the minimum of the sibling's distance +
    // the weight of the route to it
    map[node].distance = completedNeighbors.reduce(
      (acc, neighbor) =>
        acc < map[node].routes[neighbor]
          ? acc
          : map[node].routes[neighbor] + map[neighbor].distance,
      map[node].routes[completedNeighbors[0]] +
        map[completedNeighbors[0]].distance
    );
  };

  // Start by forming the queue of all the final node's neighbors
  const queue = [...Object.keys(map[n].routes)];
  while (queue.length) {
    getDistance(queue.shift());
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

countRestrictedPaths(5, [
  [1, 2, 3],
  [1, 3, 3],
  [2, 3, 1],
  [1, 4, 2],
  [5, 2, 2],
  [3, 5, 1],
  [5, 4, 10],
]);
