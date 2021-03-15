var canJump = function (nums) {
  let target = nums.length - 1;
  let j = target;

  while (j >= 0) {
    if (nums[j] >= target - j) {
      if (j === 0) {
        return true;
      } else {
        target = j;
      }
    }
    j--;
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
