function jumpingOnClouds(c) {
  // Write your code here
  const recursion = (index) => {
    if (index === c.length - 1) return 0
    let path1 = c.length;
    let path2 = c.length;
    if (c[index + 1] == 0) path1 = 1 + recursion(index + 1);
    if (c[index + 2] == 0) path2 = 1 + recursion(index + 2);
    return Math.min(path1, path2);
  };
  return recursion(0);
}

console.log(jumpingOnClouds([0, 1, 0, 0, 1, 0, 1, 0, 0]));
