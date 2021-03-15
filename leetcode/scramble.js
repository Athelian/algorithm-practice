/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  let wordLeft = "";
  let wordRight = "";
  let result;
  const options = [];

  const scramble = (word, index, swap) => {
    if (wordLeft + wordRight === s2) {
      result = true;
    }
    let left = word.substring(0, index);
    let right = word.substring(index);
    if (swap) {
      const holder = left;
      left = right;
      right = holder;
    }

    if (left.length === 1) {
      wordLeft = wordLeft + left;
    } else {
      for (let i = 1; i < left.length; i++) {
        scramble(left, i, false);
        scramble(left, i, true);
      }
    }

    if (right.length === 1) {
      wordRight = right + wordRight;
    } else {
      for (let i = 1; i < right.length; i++) {
        scramble(right, i, false);
        scramble(right, i, true);
      }
    }

    if ((wordLeft + wordRight).length === s1.length) {
      options.push(wordLeft + wordRight);
    }

    if (left.length === 1) {
      wordLeft = wordLeft.substring(0, wordLeft.length - 1);
    }
    if (right.length === 1) {
      wordRight = wordRight.substring(1, wordRight.length);
    }
  };

  for (let i = 1; i < s1.length; i++) {
    scramble(s1, i, false);
    scramble(s1, i, true);
  }

  console.log(options);
};

isScramble("fair", "poop");
