/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1;
  while (digits[i] === 9) {
    digits[i] = 0;
    i--;
  }
  if (i === -1) digits.unshift(1);
  else {
    digits[i]++;
  }
  return digits;
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
