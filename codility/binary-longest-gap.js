function solution(N) {
  N = Number(N).toString(2);

  let counter = 0;
  let max = 0;
  let start;
  let end;

  while (counter < N.length) {
    start = -1;
    end = -1;

    while (N[counter] !== "1" && counter < N.length) {
      counter++;
    }
    //Now we have probably hit a one
    if (counter >= N.length) break;

    start = counter;
    counter++;

    while (counter < N.length && N[counter] !== "1") {
      counter++;
    }
    // Now we have hit the second one

    if (counter >= N.length) break;

    end = counter;

    if (end - start - 1 > max) {
      max = end - start - 1;
    }

    // No need to continue iteration if there is not enough string remaining
    if (N.length - end - 2 < max) break;

    counter = end;
  }

  return max;
}

solution(32);
