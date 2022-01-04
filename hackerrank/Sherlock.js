function sherlockAndAnagrams(s) {
  const dict = {};
  for (i = 0; i < s.length; i++) {
    let j = i;
    while (s[j]) {
      const subString = s
        .substring(i, j + 1)
        .split("")
        .sort()
        .join("");
      if (!dict[subString.length]) dict[subString.length] = {};
      dict[subString.length][subString]
        ? dict[subString.length][subString]++
        : (dict[subString.length][subString] = 1);
      j++;
    }
  }
  function factorial(n) {
    let r = 1;
    while (n > 1) r *= n--;
    return r;
  }
  function combinations(n, r) {
    let s = 1;
    let i = r;
    while (i < n) s *= ++i;
    return s / factorial(n - r);
  }
  return Object.values(dict).reduce(
    (acc, level) => acc + Object.values(level).reduce((innerAcc, freq) => innerAcc + (freq > 1 ? combinations(freq, 2) : 0), 0),
    0
  );
}

sherlockAndAnagrams("kkkk");
