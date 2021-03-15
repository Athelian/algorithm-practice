var numMusicPlaylists = function (N, L, K) {
  const permutations = [];
  const consecutives = [];
  const usedCharacters = [];

  const permute = (input) => {
    for (let i = 0; i < input.length; i = i + 1) {
      usedCharacters.push(input[i]);
      input.splice(i, 1); //Character pushed removed
      if (input.length === 0) {
        permutations.push(usedCharacters.slice());
      }
      permute(input);
      input.splice(i, 0, usedCharacters.pop());
    }
  };

  const consecutive = () => {
    for (let i = 1; i <= N; i = i + 1) {
      consecutives.push(i);
    }
    permute(consecutives);
  };

  //Now we have a list of all base permutations
  consecutive();
  const finals = [];

  // If the length is the same size, return
  if (N === L) return permutations.length;

  // Now that we have base permutations, lets consider if L is bigger than N:
  // Consider K = 0
  // You can throw any of the songs in at any location:
  const fillOut = (input) => {
    let firstTime = true;
    for (let i = 0; i < input.length; i = i + 1) {
      // Now we are iterating over every possible song
      // For every permutation already found, try putting it in each location:
      permutations.forEach((permutation, index) => {
        for (let j = firstTime ? 0 : 1; j <= permutation.length; j++) {
          firstTime = false;
          let safe = true;
          if (permutation[j] === input[i]) {
            continue;
          }
          if (K) {
            for (let k = j - K; k < j + K; k++) {
              if (permutation[k] === input[i]) {
                safe = false;
              }
            }
            if (!safe) continue;
          }
          permutation.splice(j, 0, input[i]);
          if (finals.indexOf(permutation) < 0) finals.push(permutation.slice());
          permutation.splice(j, 1);
        }
      });
    }
  };

  fillOut(consecutives);

  return finals.length;
};

numMusicPlaylists(2, 3, 0);
