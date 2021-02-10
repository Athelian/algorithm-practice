/** Given an array nums of n integers, are there elements a, b, c in nums such
 *  that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *  Notice that the solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  let triplets = [];
  let aVals = [];
  let bVals = [];
  let cVals = [];
  nums.forEach((a, indexA, arrayA) => {
    const aRemoved = arrayA.slice(indexA + 1);
    let ab;
    aRemoved.forEach((b, indexB, arrayB) => {
      ab = a + b;
      const c = -ab;
      const check = [a, b, c].sort((d, e) => d - e);
      const abRemoved = arrayB.slice(indexB + 1);
      if (abRemoved.includes(c)) {
        aVals.push(check[0]);
        bVals.push(check[1]);
        cVals.push(check[2]);
        triplets.push(check);
      }
    });
  });
  return triplets;
};
