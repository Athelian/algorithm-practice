/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  const stack = [];
  let length = N;
  let x = 0;
  let y = 0;
  let centerIndex = Math.ceil(N / 2);
  let best = 0;

  const gridHorizontal = Array(N)
    .fill()
    .map(() => Array(N).fill(1));
  const gridVertical = Array(N)
    .fill()
    .map(() => Array(N).fill(1));
  mines.forEach((mine) => {
    gridHorizontal[mine[0]][mine[1]]--;
    gridVertical[mine[0]][mine[1]]--;
  });

  gridHorizontal.forEach((line) => {
    let i = 0;
    let nextZero = 0;

    while (i < N) {
      if (line[i] === 1) {
        let j = i;
        while (line[j + 1] === 1) {
          j++;
        }
        nextZero = j + 1;

        while (j >= i) {
          line[i] = line[i - 1] ? line[i - 1] + 1 : 1;
          line[j] = line[j + 1] ? line[j + 1] + 1 : 1;
          j--;
          i++;
        }
        i = nextZero;
      }
      i++;
    }
  });

  for (let k = 0; k < N; k++) {
    let i = 0;
    let nextZero = 0;

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
        if (Math.min(gridVertical[j + 1][k], gridHorizontal[j + 1][k]) > best)
          best = Math.min(gridVertical[j + 1][k], gridHorizontal[j + 1][k]);
        i = nextZero;
      }
      i++;
    }
  }

  while (x < centerIndex) {
    for (let i = 0; i < length; i++) {
      stack.push([y + i, x]);
    }
    for (let i = 1; i < length; i++) {
      stack.push([y, x + i]);
    }
    for (let i = 1; i < length; i++) {
      stack.push([y + i, x + length - 1]);
    }
    for (let i = 1; i < length - 1; i++) {
      stack.push([y + length - 1, x + i]);
    }

    i = stack.length - 1;
    while (stack.length) {
      if (gridHorizontal[stack[i][0]][stack[i][1]] !== 0) {
        gridHorizontal[stack[i][0]][stack[i][1]] =
          Math.min(
            stack[i][1] + 1 < N
              ? gridHorizontal[stack[i][0]][stack[i][1] + 1]
              : 0,
            stack[i][1] - 1 > -1
              ? gridHorizontal[stack[i][0]][stack[i][1] - 1]
              : 0
          ) + 1;
        gridVertical[stack[i][0]][stack[i][1]] =
          Math.min(
            stack[i][0] + 1 < N
              ? gridVertical[stack[i][0] + 1][stack[i][1]]
              : 0,
            stack[i][0] - 1 > -1
              ? gridVertical[stack[i][0] - 1][stack[i][1]]
              : 0
          ) + 1;
      }
      let value = Math.min(
        gridHorizontal[stack[i][0]][stack[i][1]],
        gridVertical[stack[i][0]][stack[i][1]]
      );
      if (value > best) best = value;
      stack.pop();
      i--;
    }

    length -= 2; //Square contracts by two

    x++; // Move one square in right and one square down
    y++;
  }

  return best;
};

orderOfLargestPlusSign(10, [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 7],
  [1, 2],
  [1, 3],
  [1, 9],
  [2, 3],
  [2, 5],
  [2, 7],
  [2, 8],
  [3, 2],
  [3, 5],
  [3, 7],
  [4, 2],
  [4, 3],
  [4, 5],
  [4, 7],
  [5, 1],
  [5, 4],
  [5, 8],
  [5, 9],
  [7, 2],
  [7, 5],
  [7, 7],
  [7, 8],
  [8, 5],
  [8, 8],
  [9, 0],
  [9, 1],
  [9, 2],
  [9, 8],
]);
