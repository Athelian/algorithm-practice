function substrCount(n, s) {
  let specials = n;
  let i = 0;
  while (i < n) {
    let j = i + 1
    while (j < n && s[i] === s[j]) {
      j++
    }
    let consecutiveLetters = j - i
    let k = i + consecutiveLetters + 1 // start of potential string
    while (k < i + consecutiveLetters * 2 + 1 && s[k] === s[i]) {
      specials++
      k++
    }
    i += consecutiveLetters
    while (consecutiveLetters > 1) {
      specials += consecutiveLetters - 1
      consecutiveLetters--
    }
  }
  return specials
}

substrCount(7, "abcbaba")