/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  const even = Boolean(N % 2 === 0);
  const minies = {};
  const minesX = {};
  const minesY = {};
  const queue = [];
  let length = even ? 2 : 1;
  let x = even ? N / 2 - 1 : Math.floor(N / 2);
  let y = x;
  let max = x + 1;
  const grid = Array(N)
    .fill()
    .map(() => Array(N).fill(1));
  mines.forEach((mine) => {
    if (!minies[mine[0]]) minies[mine[0]] = {};
    minies[mine[0]][mine[1]] = true;
    minesY[mine[0]] = true;
    minesX[mine[1]] = true;
    grid[mine[0]][mine[1]]--;
    // grid[mine[0]].fill(0);
    // for (let i = 0; i < N; i++) {
    //   grid[i][mine[1]] = 0;
    // }
  });

  const tunnel = (y, x) => {
    let originalX = x;
    let originalY = y;
    let counter = 0;
    let smallest = Infinity;
    //right:
    while (x < N) {
      if (minies[y] && minies[y][x]) {
        if (counter < smallest) smallest = counter;
        break;
      }
      counter++;
      x++;
    }
    if (counter < smallest) smallest = counter;
    counter = 0;
    x = originalX;
    while (y < N) {
      if (minies[y] && minies[y][x]) {
        if (counter < smallest) smallest = counter;
        break;
      }
      counter++;
      y++;
    }
    if (counter < smallest) smallest = counter;
    y = originalY;
    counter = 0;
    while (y >= 0) {
      if (minies[y] && minies[y][x]) {
        if (counter < smallest) smallest = counter;
        break;
      }
      counter++;
      y--;
    }
    if (counter < smallest) smallest = counter;
    y = originalY;
    counter = 0;
    while (x >= 0) {
      if (minies[y] && minies[y][x]) {
        if (counter < smallest) smallest = counter;
        break;
      }
      counter++;
      x--;
    }
    x = originalX;
    if (counter < smallest) smallest = counter;
    return smallest;
  };

  const spiral = () => {
    for (let i = 0; i < length; i++) {
      queue.push([y + i, x]);
    }
    for (let i = 1; i < length; i++) {
      queue.push([y, x + i]);
    }
    for (let i = 1; i < length; i++) {
      queue.push([y + i, x + length - 1]);
    }
    for (let i = 1; i < length - 1; i++) {
      queue.push([y + length - 1, x + i]);
    }
  };

  while (x >= 0) {
    spiral();
    let i = queue.length - 1;
    while (i >= 0) {
      if (grid[queue[i][0]][queue[i][1]] === 1) return max;
      queue.pop();
      i--;
    }
    length += 2; //Square extends by two
    x--; // Move one square up and to the left
    y--;
    max--;
  }

  let value;
  let best = 0;
  length = even ? 2 : 1;
  x = even ? N / 2 - 1 : Math.floor(N / 2);
  y = x;
  max = x + 1;

  while (best < max) {
    spiral();
    let i = queue.length - 1;
    while (i >= 0) {
      value = tunnel(queue[i][0], queue[i][1]);
      if (value > best) best = value;
      queue.pop();
      i--;
    }
    length += 2; //Square extends by two
    x--; // Move one square up and to the left
    y--;
    max--;
  }

  return best;
};

orderOfLargestPlusSign(5, [
  [1, 0],
  [1, 4],
  [2, 4],
  [3, 2],
  [4, 0],
  [4, 3],
]);
