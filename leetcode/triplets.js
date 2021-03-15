/** Given an array nums of n integers, are there elements a, b, c in nums such
 *  that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *  Notice that the solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  const triplets = [];
  nums.sort((a, b) => a - b);

  let indexLeft = 0;
  let indexRight = nums.length - 1;
  // Takes first value after zero, or
  let firstPosIndex = nums.reduce(
    (acc, num, index) => {
      if (num > 0) {
        if (Math.abs(num) < Math.abs(acc[0])) {
          return [num, index];
        }
        return acc;
      }
      return acc;
    },
    [100000, -1]
  )[1];

  if (nums[indexLeft] >= 0 || nums[indexRight] <= 0) return triplets;

  (function walk(indexRight, indexLeft) {
    if (nums[indexRight - 1] === nums[indexRight]) {
      return walk(indexRight - 1, indexLeft);
    }
    if (nums[indexLeft + 1] === nums[indexLeft]) {
      return walk(indexRight, indexLeft + 1);
    }
    let sum = nums[indexLeft] + nums[indexRight];
    let indexMiddle = firstPosIndex;
    if (sum > 0) {
      indexMiddle -= 2;
      while (nums[indexMiddle] + sum > 0 && indexMiddle > indexLeft + 1) {
        indexMiddle--;
      }
      if (
        sum + nums[indexMiddle] === 0 &&
        indexLeft !== indexMiddle &&
        indexRight !== indexMiddle
      ) {
        triplets.push([nums[indexLeft], nums[indexMiddle], nums[indexRight]]);
      }
    }
    if (sum < 0) {
      while (nums[indexMiddle] + sum < 0 && indexMiddle < indexRight - 1) {
        indexMiddle++;
      }
      if (
        sum + nums[indexMiddle] === 0 &&
        indexLeft !== indexMiddle &&
        indexRight !== indexMiddle
      ) {
        triplets.push([nums[indexLeft], nums[indexMiddle], nums[indexRight]]);
      }
    }
    if (sum === 0) {
      if (
        nums[indexMiddle - 1] === 0 &&
        indexLeft !== indexMiddle - 1 &&
        indexRight !== indexMiddle - 1
      ) {
        triplets.push([nums[indexLeft], 0, nums[indexRight]]);
      }
    }
    if (nums[indexRight - 1] > 0) {
      walk(indexRight - 1, indexLeft);
    }
    if (nums[indexLeft + 1] < 0) {
      walk(indexRight, indexLeft + 1);
    }
  })(indexRight, indexLeft);

  return triplets;
};

threeSum([-1, -3, 0, 1, 2, -1, -4, 3, 5]);
