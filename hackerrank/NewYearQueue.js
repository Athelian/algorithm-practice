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
  let i = shift.length - 1;
  while (i >= 0) {
    while (shift[i] !== -2 && shift[i] !== -1 && i >= 0) i--;
    if (i === -1) break;
    if (shift[i] === -2) {
      shift[i] = shift[i + 1] - 1;
      shift[i + 1] = shift[i + 2] - 1;
      shift[i + 2] = 0;
      bribes += 2;
      i++;
    } else {
      shift[i] = shift[i + 1] - 1;
      shift[i + 1] = 0;
      bribes++;
    }
  }
  console.log(bribes);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
