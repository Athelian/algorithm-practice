var maxArea = function (height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxArea =
    Math.min(height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex);

  return (function walk() {
    const walkRight = height[leftIndex] < height[rightIndex];
    walkRight ? leftIndex++ : rightIndex--;
    while (
      height[walkRight ? leftIndex : rightIndex] <
        height[walkRight ? leftIndex - 1 : rightIndex + 1] &&
      leftIndex < rightIndex
    ) {
      walkRight ? leftIndex++ : rightIndex--;
    }
    if (leftIndex === rightIndex) return maxArea;
    const newMax =
      Math.min(height[leftIndex], height[rightIndex]) *
      (rightIndex - leftIndex);
    maxArea = Math.max(maxArea, newMax);
    return walk();
  })();
};

console.log(maxArea([6, 4, 3, 1, 4, 6, 99, 62, 1, 2, 6]));
