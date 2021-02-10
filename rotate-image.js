// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the
// input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let shell = 0;
  while (shell < Math.floor(matrix.length / 2)) {
    (i = shell),
      (j = shell),
      (k = matrix.length - 1 - shell),
      (l = matrix.length - 1 - shell);
    moves = matrix.length - 1 - 2 * shell;
    while (moves) {
      const a = matrix[shell][i];
      const b = matrix[j][matrix.length - 1 - shell];
      const c = matrix[matrix.length - 1 - shell][k];
      const d = matrix[l][shell];
      matrix[shell][i] = d;
      matrix[j][matrix.length - 1 - shell] = a;
      matrix[matrix.length - 1 - shell][k] = b;
      matrix[l][shell] = c;
      i++;
      j++;
      k--;
      l--;
      moves--;
    }
    shell++;
  }
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
