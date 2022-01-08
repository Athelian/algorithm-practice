function hourglassSum(arr) {
  // Write your code here
  const summedGrid = arr.map((row, i) =>
    row.map((el, j) =>
      j === 0 || j === arr.length - 1 ? 0 : row[j - 1] + row[j + 1] + el
    )
  );
  let max = Number.MIN_SAFE_INTEGER;

  arr.forEach((row, i) =>
    row.forEach((col, j) => {
      if (i !== 0 && j !== 0 && i !== arr.length - 1 && j !== arr.length - 1) {
        const total = summedGrid[i - 1][j] + summedGrid[i + 1][j] + arr[i][j];
        if (total > max) max = total;
      }
    })
  );
  return max;
}

hourglassSum([
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
]);
