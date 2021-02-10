// Given n non-negative integers representing an elevation map where the width
// of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

//must find the heighest bar, but not affect the position of the bar

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let totalWater = 0;

  const getMaxValIdx = (height) =>
    height.reduce(
      (maxValIdx, value, index) => {
        if (value > maxValIdx[0]) {
          maxValIdx[0] = value;
          maxValIdx[1] = index;
        }
        return maxValIdx;
      },
      [0, 0]
    );

  const recursion = (partition, left) => {
    // This goes from start of array and does not include middle bar
    const maxPartition = getMaxValIdx(partition);

    // if this is a left, we need to count water between this max and the middle max:
    if (left) {
      const a = partition.slice();
      a.pop();
      const maxLeft = getMaxValIdx(a);
      totalWater += countWater(partition.slice(maxLeft[1]));
      const leftPartition = partition.slice(0, maxLeft[1]);
      recursion(leftPartition, true);
    } else {
      totalWater += countWater(partition.slice(0, maxPartition[1] + 1));
      const rightPartition = partition.slice(maxPartition[1] + 1);
      recursion(rightPartition);
    }
  };

  const countWater = (height) => {
    //should receive an array with two large walls at each side

    // we could count the maximum possible water and then remove the bars
    // in between:

    // max possible height is naturally the larger of the two left / right bars:
    const maxWater =
      (height[0] > height[height.length - 1]
        ? height[0]
        : height[height.length - 1]) *
      (height.length - 2);

    // now just sum all the heights in between
    // start by removing the edges, we don't need them
    height.shift();
    height.pop();

    //now reduce
    const obstructions = height.reduce((acc, value) => (acc += value));

    //now we know the max possible, and we know how many blocking squares
    return maxWater - obstructions;
  };

  const middleMax = getMaxValIdx(height);
  const leftPartition = height.slice(0, middleMax[1] + 1);
  const rightPartition = height.slice(middleMax[1]);

  recursion(leftPartition, true);
  recursion(rightPartition, false);

  // Now that we have the biggest bar, and its index, we need to find
  // the next biggest bar on each side, as those two will form a cavity
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
