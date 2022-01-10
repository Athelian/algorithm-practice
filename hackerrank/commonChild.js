function commonChild(s1, s2) {
  const arr = Array(s2.length + 1).fill(0)
  arr[0] = Array(s1.length + 1).fill(0)
  s1.split("").forEach((c1, i) => {
    arr[i + 1] = [0]
    s2.split("").forEach((c2, j) => {
      if (c1 === c2) {
        arr[i + 1][j + 1] = arr[i][j] + 1
      }
      else {
        arr[i + 1][j + 1] = Math.max(arr[i][j + 1] || 0, arr[i + 1][j] || 0)
      }
    })
  })
}

commonChild("HARRY", "SALLY");
