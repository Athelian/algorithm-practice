/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return true;

  const sArray = s.split("");
  const tArray = t.split("");

  const count = (array) => {
    const values = [];
    for (let i = 0; i < array.length; i++) {
      let counter = 1;
      while (array[i] === array[i + 1]) {
        counter++;
        i++;
      }
      values.push(counter);
    }
    return values;
  };

  const sValues = count(sArray);
  const tValues = count(tArray);

  for (let i = 0; i < sValues.length; i++) {
    if (sValues[i] !== tValues[i]) return false;
  }

  const map = {};
  const mapRev = {};

  for (let i = 0; i < sArray.length; i++) {
    if (map[sArray[i]]) {
      if (map[sArray[i]] === tArray[i]) continue;
      if (map[sArray[i]] !== tArray[i]) return false;
    }
    if (mapRev[tArray[i]]) return false;
    map[sArray[i]] = tArray[i];
    mapRev[tArray[i]] = true;
  }

  return true;
};

isIsomorphic("egg", "add");
