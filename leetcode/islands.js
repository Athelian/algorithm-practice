var numIslands = function (grid) {
  const seen = grid.map((row) => row.map(() => false));
  let islands = 0;

  const buildIsland = (i, j) => {
    if (!seen[i][j]) seen[i][j] = true;
    if (grid[i][j] === "1") {
      if (i + 1 < grid.length && !seen[i + 1][j]) buildIsland(i + 1, j);
      if (j + 1 < grid[0].length && !seen[i][j + 1]) buildIsland(i, j + 1);
      if (i - 1 >= 0 && !seen[i - 1][j]) buildIsland(i - 1, j);
      if (j - 1 >= 0 && !seen[i][j - 1]) buildIsland(i, j - 1);
    }
  };

  const findIsland = () => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (!seen[row][col] && grid[row][col] === "1") {
          buildIsland(row, col);
          islands++;
          return findIsland();
        }
      }
    }
  };

  findIsland();

  return islands;
};

console.log(
  numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"],
  ])
);
