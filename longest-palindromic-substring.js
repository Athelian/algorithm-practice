/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const maxRepeatChars = Math.floor(s.length) - 1;
  const charTable = {};

  const buildTable = (params) => {
    for (let i = 0; i < s.length; i++) {
      charTable[s[i]] ? charTable[s[i]]++ : (charTable[s[i]] = 0);
    }
  };

  const checkTable = (searchValue) => {
    let total = 0;
    let charsToUse = {};
    for (const [key, value] of charTable) {
      if (value % 2 === 0) {
        total += value;
        charsToUse[key] = value;
      }
      if (total >= searchValue) {
        return finalize(charsToUse);
      }
    }
    checkTable(searchValue--);
  };

  const finalize = (charsToUse) => {
    let string = "";

    for (const [char, value] of charsToUse) {
      s.replace(char, "");
      string = string + char * (value / 2);
      string = (value / 2) * char + string;
    }
    const centerIndex = string.split("").length / 2;
    string.split("").splice(centerIndex, 0, s[0]);
    return string;
  };

  buildTable();
  return checkTable(maxRepeatChars);
};
