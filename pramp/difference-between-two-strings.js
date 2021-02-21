function diffBetweenTwoStrings(source, target) {
  const memo = Array(source.length + 1)
    .fill(0)
    .map((row) => Array(target.length + 1));

  for (let i = 0; i <= source.length; i++) {
    for (let j = 0; j <= target.length; j++) {
      if (i === 0) memo[i][j] = j;
      else if (j === 0) memo[i][j] = i;
      else if (source[i - 1] === target[j - 1]) memo[i][j] = memo[i - 1][j - 1];
      else memo[i][j] = Math.min(memo[i - 1][j], memo[i][j - 1]) + 1;
    }
  }

  //Memo built, run back from bottom right
  const res = [];

  let i = source.length;
  let j = target.length;
  while (i + j > 0) {
    if (j - 1 >= 0 && memo[i][j - 1] === memo[i][j] - 1) {
      res.unshift(`+${target[j - 1]}`);
      j--;
    } else if (i - 1 >= 0 && memo[i - 1][j] === memo[i][j] - 1) {
      res.unshift(`-${source[i - 1]}`);
      i--;
    } else if (i - 1 >= 0 && j - 1 >= 0 && memo[i - 1][j - 1] === memo[i][j]) {
      res.unshift(target[j - 1]);
      i--;
      j--;
    }
  }

  return res;
}

diffBetweenTwoStrings("AABACC", "BABCAC");
