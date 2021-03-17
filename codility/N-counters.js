function solution(N, A) {
  let max = 0;
  N = Array(N).fill(0);
  A.forEach((value) => {
    if (value > N.length) {
      N = Array(N.length).fill(max);
    } else {
      N[value - 1]++;
      if (N[value - 1] > max) max = N[value - 1];
    }
  });

  return N;
}

solution(5, [3, 4, 4, 6, 1, 4, 4]);
