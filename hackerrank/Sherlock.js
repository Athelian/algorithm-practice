function sherlockAndAnagrams(s) {
  const dict = {};
  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      const substring = s.slice(i, j).split("").sort().join("");
      dict[substring] ? dict[substring]++ : (dict[substring] = 1);
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
    (acc, freq) => acc + (freq > 1 ? combinations(freq, 2) : 0),
    0
  );
}

sherlockAndAnagrams("kkkk");
