/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (N, mines) {
  const even = Boolean(N % 2 === 0);
  let length = even ? 2 : 1;
  const minies = {};
  const minesX = {};
  const minesY = {};

  mines.forEach((mine) => {
    if (!minies[mine[0]]) minies[mine[0]] = {};
    minies[mine[0]][mine[1]] = true;
    minesY[mine[0]] = true;
    minesX[mine[1]] = true;
  });

  let x = even ? N / 2 - 1 : Math.floor(N / 2);
  let y = x;

  let best = 0;
  let max = x + 1;

  const obstruction = (y, x) => (minies[y][x] ? true : false);

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

  let value;
  while (best < max) {
    for (let i = 0; i < length; i++) {
      if (!minesX[x] && !mines[y + i]) return max;
    }
    for (let i = 1; i < length; i++) {
      if (!minesX[x + i] && !mines[y]) return max;
    }
    for (let i = 1; i < length; i++) {
      if (!minesX[x + length - 1] && !mines[y + i]) return max;
    }
    for (let i = 1; i < length - 1; i++) {
      if (!minesX[x + i] && !mines[y + length - 1]) return max;
    }

    for (let i = 0; i < length; i++) {
      value = tunnel(y + i, x);
      if (value > best) best = value;
    }
    for (let i = 1; i < length; i++) {
      value = tunnel(y, x + i);
      if (value > best) best = value;
    }
    for (let i = 1; i < length; i++) {
      value = tunnel(y + i, x + length - 1);
      if (value > best) best = value;
    }
    for (let i = 1; i < length - 1; i++) {
      value = tunnel(y + length - 1, x + i);
      if (value > best) best = value;
    }
    length += 2; //Square extends by two
    x--; // Move one square up and to the left
    y--;
    max--;
  }

  return best;
};

orderOfLargestPlusSign(6, [
  [4, 2],
  [1, 2],
  [0, 3],
  [2, 4],
]);
