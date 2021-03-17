/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  // Returns average pass ratio
  const avg = () => {
    let total = 0;
    classes.forEach((group) => {
      total += group[0] / group[1];
    });
    return total / classes.length;
  };

  let max;

  while (extraStudents) {
    // [0] is the denominator, [1] is the index within classes
    max = [0, 0];

    // Now we have the index of the smallest class that isn't already completely passed
    classes.forEach((group, index) => {
      if (group[0] === group[1]) return;
      const change = group[1] / group[0];
      if (change > max[0]) max = [change, index];
    });

    classes[max[1]][0]++;
    classes[max[1]][1]++;

    extraStudents--;
  }

  return avg();
};

maxAverageRatio(
  [
    [2, 4],
    [3, 9],
    [4, 5],
    [2, 10],
  ],
  4
);
