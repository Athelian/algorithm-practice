function minimumBribes(q) {
  const shift = [];
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    const displacement = i - q[i] + 1; // how much it moved by
    // Can expect random assortment of numbers in here.
    // Anything that is -2 should be left as is, otherwise,
    // trade +1/-1 until there are twos to match the other side
    if (displacement < -2) {
      // then this is illegal
      return console.log("Too chaotic");
    } else {
      shift.push(displacement);
    }
  }
  // shift.sort();
  // Now trade values around until we reach all 0s and + 2

  let i = 0;
  let j = shift.length - 1;
  while (i < j) {
    // array should be something like [-1,-1,-1,-1,-1,-1,1,2,3]
    while (shift[i] === 0 || shift[i] === 2) {
      i++;
    }
    while (shift[j] === 0 || shift[j] === 2) {
      j--;
    }
    // [-1,-1,-1,-1,-1,-1,1,1,1, 3]
    //  i                        j
    shift[i]++;
    shift[j]--;
    if (shift[i] === 0 || shift[i] === 2) i++;
    if (shift[j] === 0 || shift[i] === 2) j--;
    bribes += 1;
    // [0,-1,-1,-1,-1,-1,1,1,1, 2]
    // [0,0,-1,-1,-1,-1,1,1,1, 1]
  }
  return bribes;
}

minimumBribes([2, 1, 5, 3, 4]);
