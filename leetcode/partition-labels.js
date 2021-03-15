/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const res = [];
  let left;
  let right;
  let limit;
  let visited;

  while (S.length) {
    left = 0;
    right = S.length - 1;
    limit = 1;
    visited = {};

    while (left < limit) {
      // If this letter hasn't been checked
      if (!visited[S[left]]) {
        // Iterate from right until that letter is found
        while (S[right] !== S[left] && right >= limit) {
          right--;
        }
        // If the position of this is further to the right than the previous limit, update it
        if (right > limit || limit === 1) limit = right;
        // Mark it as complete
        visited[S[left]] = true;
        // Reset right counter
        right = S.length - 1;
      }
      // Check the next letter
      left++;
    }
    // After this, the limit should denote the index at which to split
    res.push(limit + 1);
    S = S.slice(limit + 1);
  }

  return res;
};

partitionLabels("caedbdedda");
