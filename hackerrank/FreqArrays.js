function freqQuery(queries) {
  const map = {}
    const revMap = {}
  const res = []
  queries.forEach((tuple) => {
    if (tuple[0] === 1) {
      if (map[tuple[1]]) {
        delete revMap[map[tuple[1]]][tuple[1]]
        if (!revMap[map[tuple[1]] + 1]) {
          revMap[map[tuple[1]] + 1] = {}
        }
        revMap[map[tuple[1]] + 1][tuple[1]] = true
        map[tuple[1]]++
      }
      else {
        map[tuple[1]] = 1
        if (!revMap[1]) revMap[1] = {}
        revMap[1][tuple[1]] = true
      }
    }
    else if (tuple[0] === 2) {
      if (map[tuple[1]] === 1) {
        delete map[tuple[1]]
        delete revMap[1][tuple[1]]
      }
      else if (map[tuple[1]] > 1) {
        map[tuple[1]]--
        delete revMap[map[tuple[1]]][tuple[1]]
        revMap[map[tuple[1]] + 1][tuple[1]] = true
      }
    }
    else {
      const keys = Object.keys(revMap[tuple[1]] ? revMap[tuple[1]] : {})
      if (keys && keys.length) res.push(1)
      else res.push(0)
    }
  })
  return res;
}


freqQuery(
[[1, 5],
[1, 6],
[3, 2],
[1, 10],
[1, 10],
[1, 6],
[2, 5],
[3, 2]])