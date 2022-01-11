const dict = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],  
}

var letterCombinations = function(digits) {
  let current = []
  const res = []
  
  const recurse = (s) => {
    // Iterate over all of the letters from the first digit of s
    for (let i = 0; i < dict[s[0]].length; i++) {
      current.push(dict[s[0]][i]);
      if (current.length === digits.length) {
        res.push(current.join(""))
        current.pop()
      }
      if (s.length > 1) {
        recurse(s.substring(1, s.length))
        current.pop()
      }
    }
  }
  
  recurse(digits.toString())
  return res;
};

letterCombinations("23")