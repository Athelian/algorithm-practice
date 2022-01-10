function isValid(s) {
const freq = s.split("").reduce((memo, c) => {
  memo[c] ? memo[c]++ : (memo[c] = 1);
  return memo;
}, {});
const sorted = [[], []];

for (let value of Object.values(freq)) {
  if (!sorted[0][0] || value === sorted[0][0]) {
    sorted[0].push(value);
    continue;
  } else if (!sorted[1][0] || value === sorted[1][0]) {
    sorted[1].push(value);
    continue;
  }
  if (
    (value !== sorted[0][0] && value !== sorted[1][0]) ||
    (sorted[0].length > 1 && sorted[1].length > 1) ||
    (Math.abs(value - sorted[0][0]) > 1 && value !== 1) ||
    (value === 1 &&
      ((sorted[0][0] === 1 && sorted[0].length > 1) ||
        (sorted[1][0] === 1 && sorted[1].length > 1)))
  )
    return "NO";
}
return "YES";
}

console.log(isValid("aabc"));
