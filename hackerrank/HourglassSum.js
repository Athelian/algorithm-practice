  while (x < 6) {
    const topRow = nextTop ? nextTop + arr[y][x + 1] : arr[y][x] + arr[y][x + 1] + arr[y][x + 2]
    const bottomRow = nextBottom ? nextBottom + arr[y][x + 1] : arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2]
    const middle = arr[y + 1][x + 1]
    const total = topRow + bottomRow + middle
    if (total > max) max = total
    nextTop = topRow - arr[y][x + 2]
    nextBottom = bottomRow - arr[y + 2][x + 2]
    x++
  }