/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;

  const indexesToRemove = [];

  // Determine the number of bulls;
  for (let i = secret.length - 1; i >= 0; i--) {
    if (secret[i] === guess[i]) {
      bulls++;
      indexesToRemove.push(i);
    }
  }

  const secretArray = secret.split("");
  const guessArray = guess.split("");

  // Now we have all the bulls and each of their index positions:
  indexesToRemove.forEach((index) => {
    secretArray.splice(index, 1);
    guessArray.splice(index, 1);
  });

  // Now we have two shortened strings which can be analysed for cows:
  // First build up a character bank:
  const characterBank = {};

  guessArray.forEach((char) => {
    if (characterBank[char]) characterBank[char]++;
    else characterBank[char] = 1;
  });

  secretArray.forEach((char) => {
    if (characterBank[char] > 0) {
      cows++;
      characterBank[char]--;
    }
  });

  return bulls + "A" + cows + "B";
};

getHint("11", "11");
