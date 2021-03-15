/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let counter = 0;
  const queue = [beginWord];
  const hash = {};
  wordList.forEach((word) => (hash[word] = true));
  if (!hash[endWord]) return 0;
  let finished = false;
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const traverse = (currentWord) => {
    let possibleWords = [];
    const a = currentWord.split("");
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < currentWord.length; j++) {
        const b = [...a];
        b[j] = alphabet[i];
        const word = b.join("");
        if (word === endWord) return (finished = true);
        possibleWords.push(word);
      }
    }
    possibleWords = possibleWords.filter((word) => hash[word] === true);
    for (let i = 0; i < possibleWords.length; i++) {
      hash[possibleWords[i]] = false;
      queue.push(possibleWords[i]);
    }
  };

  while (queue.length) {
    const queueLength = queue.length;
    counter++;
    for (let i = 0; i < queueLength; i++) {
      traverse(queue[i]);
      if (finished) return counter + 1;
    }
    queue.splice(0, queueLength);
  }
  return 0;
};
