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
