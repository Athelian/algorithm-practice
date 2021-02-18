console.log(1);

var maxArea = function (height) {
  let greatest = 0;
  const force = (array) => {
    const max = array.reduce((max, value, index) => {
      // // for index 0:
      // // for height outermost
      // const height = value > height[height.length - index] ? value : height[height.length - index]
      // // the height is equal to the larger of the two,
      // // if the index was 2, then check height of that value, but also check

      //brute force
      //need to find the max

      const height =
        value < array[array.length - 1] ? value : array[array.length - 1];

      const length = array.length - index - 1;

      if (height * length > max) max = height * length;
      return max;
    }, 0);
    return max;
  };

  for (let i = 0; i < height.length; i++) {
    const test = force(height.slice(i));
    if (test > greatest) {
      greatest = test;
    }
  }
  return greatest;
};

maxArea([2, 3, 4, 5, 18, 17, 6]);
