function deletionDistance(str1, str2) {
  const memo = Array(str1.length + 1)
    .fill(0)
    .map((row) => Array(str2.length + 1).fill(0));

  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0) {
        memo[i][j] = j;
      } else if (j === 0) {
        memo[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        memo[i][j] = Math.min(memo[i - 1][j], memo[i][j - 1]) + 1;
      }
    }
  }

  return memo[str1.length][str2.length];
}
