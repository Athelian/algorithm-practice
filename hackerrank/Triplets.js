function countTriplets(arr, r) {
  let triplets = 0;

  const factorial = (x) => {
    if (x === 0) return 1
    let total = x;
    while (x > 2) {
      total *= x - 1;
      x--;
    }
    return total;
  };
  const combinationsGroupsOfThree = (n) =>
    factorial(n) / (factorial(3) * factorial(n - 3));

  const dict = arr.reduce(
    (memo, el) => (memo[el] ? memo[el]++ : (memo[el] = 1)) && memo,
    {}
  );
  Object.keys(dict).forEach((key) => {
    let stepOnes = 0;
    let stepTwos = 0;
    stepOnes += dict[key * r];
    stepTwos += dict[key * r * r];
    triplets +=
      stepOnes && stepTwos
        ? stepTwos * stepOnes * dict[key]
        : 0;
  });

  return triplets;
}

// 1
countTriplets([1, 5, 5, 25, 125], 2);
