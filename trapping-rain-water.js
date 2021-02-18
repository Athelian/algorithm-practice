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
        if (value > maxValIdx.value) {
          maxValIdx.value = value;
          maxValIdx.index = index;
        }
        return maxValIdx;
      },
      { value: 0, index: 0 }
    );

  const recursion = (partition, left, max) => {
    if (left) {
      const maxLeft = getMaxValIdx(partition);
      totalWater += countWater(partition.slice(maxLeft.index));
      const leftPartition = partition.slice(0, maxLeft.index + 1);
      if (leftPartition.length >= 3) recursion(leftPartition, true);
    } else {
      const a = partition.slice();
      a.shift();
      const maxRight = getMaxValIdx(a);
      totalWater += countWater(partition.slice(0, maxRight.index + 2));
      const rightPartition = partition.slice(maxRight.index + 1);
      if (rightPartition.length >= 3) recursion(rightPartition);
    }
  };

  //should receive an array with two large walls at each side
  const countWater = (height) => {
    //Sometimes we receive a dead array
    if (height.length < 3) return 0;

    // we could count the maximum possible water and then remove the bars
    // in between:

    // max possible height is naturally the larger of the two left / right bars:
    const maxWater =
      (height[0] > height[height.length - 1]
        ? height[height.length - 1]
        : height[0]) *
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
  const leftPartition = height.slice(0, middleMax.index);
  const rightPartition = height.slice(middleMax.index + 1);
  recursion(leftPartition, true, middleMax.value);
  recursion(rightPartition, false, middleMax.value);

  return totalWater;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
