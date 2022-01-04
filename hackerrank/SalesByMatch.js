function sockMerchant(n, ar) {
  // Write your code here
  let i = n - 1
  let pairs = 0
  loop1:
    while (i >= 0) {
      let j = i - 1
      while (j >= 0) {
        if (ar[i] == ar[j]) {
          ar.splice(i, 1)
          ar.splice(j, 1)
          i--
          i--
          pairs++
          continue loop1
        }
        j--
      }
    i--
  }
  return pairs
}

console.log(sockMerchant(5, [2,3,2,3,2]))