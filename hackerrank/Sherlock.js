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
  return Object.values(dict).reduce(
    (acc, level) =>
      acc + Object.values(level).reduce((innerAcc, freq) => innerAcc + freq - 1, 0),
    0
  );
}

sherlockAndAnagrams("cdcd");
