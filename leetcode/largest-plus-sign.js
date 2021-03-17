/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  let best = 0;
  let i;
  let nextZero;

  let grid = Array(N)
    .fill()
    .map(() =>
      Array(N)
        .fill()
        .map(() => [1, 1])
    );

  mines.forEach((mine) => {
    grid[mine[0]][mine[1]][0]--;
    grid[mine[0]][mine[1]][1]--;
  });

  for (let k = 0; k < N; k++) {
    i = 0;
    nextZero = 0;

    while (i < N) {
      if (grid[k][i][1] === 1) {
        let j = i;
        while (grid[k][j + 1] && grid[k][j + 1][1] === 1) {
          j++;
        }
        nextZero = j + 1;

        while (j >= i) {
          grid[k][i][1] = grid[k][i - 1] ? grid[k][i - 1][1] + 1 : 1;
          grid[k][j][1] = grid[k][j + 1] ? grid[k][j + 1][1] + 1 : 1;
          j--;
          i++;
        }
        i = nextZero;
      }
      i++;
    }

    i = 0;
    nextZero = 0;
    while (i < N) {
      if (grid[i][k][0] === 1) {
        let j = i;
        while (grid[j + 1] && grid[j + 1][k][0] === 1) {
          j++;
        }
        nextZero = j + 1;

        while (j >= i) {
          grid[i][k][0] = grid[i - 1] ? grid[i - 1][k][0] + 1 : 1;
          grid[j][k][0] = grid[j + 1] ? grid[j + 1][k][0] + 1 : 1;
          j--;
          i++;
        }
        i = nextZero;
      }
      i++;
    }
  }

  grid.forEach((row) =>
    row.forEach((value) => {
      value = Math.min(value[1], value[0]);
      if (value > best) best = value;
    })
  );

  return best;
};

orderOfLargestPlusSign(5, [
  [0, 2],
  [0, 4],
  [1, 2],
  [2, 0],
  [2, 3],
  [2, 4],
  [3, 4],
  [4, 2],
  [4, 4],
]);
