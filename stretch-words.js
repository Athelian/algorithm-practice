/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (S, words) {
  const pattern = [];

  let i = 0;

  const genPattern = (word) => {
    while (i < wprd.length) {
      if (
        i + 1 < word.length &&
        word[i] === word[i + 1] &&
        i + 2 < word.length &&
        word[i] === word[i + 2]
      ) {
        //Then we have a row of three+
        pattern.push(word[i].repeat(3));
        const current = word[i];
        while (word[i] === current) {
          i++;
        }
        // Now either end of string or nes character
      } else {
        pattern.push(S[i]);
        i++;
      }
    }
  };

  let validWords = 0;

  console.log(pattern);
};

expressiveWords("hellooooo", ["e"]);
