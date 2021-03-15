/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // Ensure that everything is at 1 at least:
  ratings = ratings.map((rating) => ++rating);

  // Now make sure that everything is as minimum as possible
  // Do this by finding the lowest value, reducing it until one, and then everything else by the same amount
  const min = Math.min(...ratings);
  const amountToReduce = min - 1;
  ratings = ratings.map((rating) => rating - amountToReduce);
  const flattenedIndexes = [];
  // Now, we want to go in order of elements in terms of lowest rating to highest rating.
  // We will minimise the rating in question by checking it's neighbors.
  // If the neighbor is smaller than, make it + 1 of that neighbor
  // If it's a smaller neighbour, that neighbour will already have been minimised.
  // Else make it one

  // Flatten all center members of groups of 3+ identical members:
  const flattenCenterClones = (array) => {
    for (let i = 0; i < array.length; i++) {
      const indexes = [i];
      let j = i + 1;
      while (array[j] === array[i]) {
        indexes.push(j);
        j++;
      }
      if (indexes.length >= 3) {
        for (let k = 1; k < indexes.length - 1; k++) {
          array[indexes[k]] = 1;
          flattenedIndexes.push(indexes[k]);
        }
        if (array[indexes[0] - 1] < array[indexes[0]]) {
          array[indexes[0]] = array[indexes[0] - 1] + 1;
        } else {
          array[indexes[0]] = 1;
        }
        if (
          array[indexes[indexes.length - 1] + 1] <
          array[indexes[indexes.length - 1]]
        ) {
          array[indexes[indexes.length - 1]] =
            array[indexes[indexes.length - 1] + 1] + 1;
        } else {
          array[indexes[indexes.length - 1]] = 1;
        }
        i += indexes.length;
      }
      // if (indexes.length >= 2) {
      //   // const leftWall = array[indexes[0]];
      //   if (array[indexes[0]] < array[indexes[0] - 1]) {
      //     array[indexes[0]] = 1;
      //   } else {
      //     array[indexes[0]] = array[indexes[0] - 1] + 1;
      //   }
      //   if (
      //     array[indexes[indexes.length - 1]] <
      //     array[indexes[indexes.length - 1] + 1]
      //   ) {
      //     array[indexes[indexes.length - 1]] = 1;
      //   } else {
      //     array[indexes[indexes.length - 1]] =
      //       array[indexes[indexes.length - 1] + 1] + 1;
      //   }
      // }
    }
  };

  const slide = (array) => {
    // Get the indexes of all values in ascending order
    const sorted = [...new Set(array)];
    sorted.sort((a, b) => a - b);
    const indexes = [];
    let i = -1;

    for (const value of sorted) {
      array.reduce((a, rating, i) => {
        if (rating === value) indexes.push(i);
        return a;
      }, 0);
    }

    // Now we have the order of indexes to address

    // But, it would be better if we organised similar values
    // so that any three identicals are rearranged so that the middles
    for (const index of indexes) {
      if (flattenedIndexes.includes(index)) continue;
      const leftNeighbour = array[index - 1];
      const rightNeighbour = array[index + 1];

      if (rightNeighbour === array[index]) {
        if (leftNeighbour > array[index]) {
          array[index] = 1;
        } else {
          array[index] = leftNeighbour ? leftNeighbour + 1 : 1;
        }
        if (rightNeighbour < array[index + 2]) {
          array[index + 1] = 1;
        } else {
          array[index + 1] = array[index + 2] ? array[index + 2] + 1 : 1;
        }
        continue;
      }

      if (leftNeighbour < array[index] || rightNeighbour < array[index]) {
        if (leftNeighbour < array[index] && rightNeighbour < array[index]) {
          //Two small, make +1 biggest:
          array[index] =
            Math.max(
              leftNeighbour ? leftNeighbour : 999999,
              rightNeighbour ? rightNeighbour : 999999
            ) + 1;
        } else {
          array[index] =
            Math.min(
              leftNeighbour ? leftNeighbour : 999999,
              rightNeighbour ? rightNeighbour : 999999
            ) + 1;
        }
      } else {
        array[index] = 1;
      }
    }
  };

  let flat = true;
  flattenCenterClones(ratings);
  const ref = ratings[0];
  for (const rating of ratings) {
    if (rating !== ref) {
      flat = false;
      break;
    }
  }
  if (!flat) slide(ratings);

  return ratings.reduce((acc, value) => (acc += value));
};

candy([5, 1, 1, 1, 10, 2, 1, 1, 1, 3]);
