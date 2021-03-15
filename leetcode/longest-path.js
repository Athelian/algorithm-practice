// Given an m x n integers matrix, return the length of the longest increasing path in matrix.

// From each cell, you can either move in four directions: left, right, up, or down.
// You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let max;
  let min;

  for (let i = 0; i < flat.length; i++) {
    for (let i = 0; i < flat.length; j++) {
      if (matrix[i][j] > max) max = [i, j];
      if (matrix[i][j] < min) min = [i, j];
  }

  let paths = 0;

  const traverseMin = (i, j) => {
    let min;
    let max;
    const value = matrix[i][j];
    let a
    let b
    
    min = matrix[i + 1][j];
    a = + 1;
    b = 0
    if (matrix[i - 1][j] < min) {
      a = -1 
      b = 0;
    }
    if (matrix[i][j + 1] < min) {
      a = 0;
      b = 1;
    }
    if (matrix[i][j - 1] < min) {
      a = 0;
      b = -1;
    }
  }
};
