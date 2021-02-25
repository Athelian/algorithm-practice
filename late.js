var checkRecord = function (s) {
  let a = 0;

  let i = 0;

  while (i < s.length) {
    if (s[i] === "A") {
      a++;
      i++;
      if (a >= 2) return false;
    } else if (s[i] === "L") {
      let j = i + 1;
      while (s[j] === "L" && j < s.length) {
        j++;
      }
      if (j >= i + 3) {
        return false;
      }
      i = j;
    } else {
      i++;
    }
  }

  return true;
};

checkRecord("PPALLP");
