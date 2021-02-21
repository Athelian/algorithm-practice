/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const memo = matrix.map((row) => row.map((col) => -1));

  const search = (i, j) => {
    const inRangeSquares = [];

    if (i - 1 >= 0) inRangeSquares.push([i - 1, j]);
    if (j - 1 >= 0) inRangeSquares.push([i, j - 1]);
    if (i + 1 < matrix.length) inRangeSquares.push([i + 1, j]);
    if (j + 1 < matrix[0].length) inRangeSquares.push([i, j + 1]);

    const surroundingMemos = [];

    const squaresToCheck = inRangeSquares.filter((square) => {
      if (memo[square[0]][square[1]] !== -1) {
        if (memo[square[0]][square[1]] > 0)
          surroundingMemos.push(memo[square[0]][square[1]]);
        return false;
      } else return true;
    });

    const squaresBigEnough = squaresToCheck.filter(
      (square) => matrix[square[0]][square[1]] > matrix[i][j]
    );

    if (squaresBigEnough.length === 0) {
      if (memo[i][j] === -1) {
        if (surroundingMemos.length) {
          memo[i][j] = Math.max(...surroundingMemos) + 1;
        } else {
          memo[i][j] = 0;
        }
      }
      return 0;
    }

    squaresBigEnough.forEach((square) => {
      surroundingMemos.push(search(square[0], square[1]));
    });

    memo[i][j] = Math.max(...surroundingMemos) + 1;

    return memo[i][j];
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      search(i, j);
    }
  }
};

spiralOrder([
  [3, 4, 5],
  [3, 2, 6],
  [2, 2, 1],
]);
