// Find the largest open square at this location.
function findLargestSquareAt(grid, x, y, cache) {
  if (!grid[x][y]) return 0;
  let lastRow = grid.length - 1;
  if (x == lastRow || y == lastRow) return 1;
  let right = grid[x + 1][y];
  let below = grid[x][y + 1];
  let rightBelow = grid[x + 1][y + 1];
  return Math.min(right, below, rightBelow) + 1;
}
// The main function.
// Measure each cell and track the best.
function solve(grid) {
  let best = 0;
  let width = grid.length;
  let cache = grid.map((col) => col.map(() => 0));
  for (let x = width - 1; x >= 0; x--) {
    for (let y = width - 1; y >= 0; y--) {
      let current = findLargestSquareAt(grid, x, y, cache);
      cache[x][y] = current;
      best = Math.max(best, current);
    }
  }
  return best;
}
