/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  let best = 0;
  let i;
  let nextZero;

  let gridHorizontal = Array(N)
    .fill()
    .map(() => Array(N).fill(1));
  mines.forEach((mine) => {
    gridHorizontal[mine[0]][mine[1]]--;
  });
  const gridVertical = gridHorizontal.map((arr) => arr.slice());

  for (let k = 0; k < N; k++) {
    i = 0;
    nextZero = 0;

    while (i < N) {
      if (gridHorizontal[k][i] === 1) {
        let j = i;
        while (gridHorizontal[k][j + 1] === 1) {
          j++;
        }
        nextZero = j + 1;

        while (j >= i) {
          gridHorizontal[k][i] = gridHorizontal[k][i - 1]
            ? gridHorizontal[k][i - 1] + 1
            : 1;
          gridHorizontal[k][j] = gridHorizontal[k][j + 1]
            ? gridHorizontal[k][j + 1] + 1
            : 1;
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
      if (gridVertical[i][k] === 1) {
        let j = i;
        while (gridVertical[j + 1] && gridVertical[j + 1][k] === 1) {
          j++;
        }
        nextZero = j + 1;

        while (j >= i) {
          gridVertical[i][k] = gridVertical[i - 1]
            ? gridVertical[i - 1][k] + 1
            : 1;
          gridVertical[j][k] = gridVertical[j + 1]
            ? gridVertical[j + 1][k] + 1
            : 1;
          j--;
          i++;
        }
        i = nextZero;
      }
      i++;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let value = Math.min(gridHorizontal[i][j], gridVertical[i][j]);
      if (value > best) best = value;
    }
  }

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
