/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function (username, timestamp, website) {
  let w = 0;

  const websiteTriples = {};

  while (w < website.length) {
    const websites = [];
    for (let i = 0; i <= 2; i++) {
      websites.push(website[w]);
      w++;
      //Push in three websites
    }
    websiteTriples[websites]
      ? websiteTriples[websites]++
      : (websiteTriples[websites] = 1);

    while (username[w] === username[w - 1]) {
      w++;
    }
  }

  let maxKey = "";
  let maxVal = 0;

  for (const [key, value] of Object.entries(websiteTriples)) {
    if (value > maxVal) {
      maxVal = value;
      maxKey = key;
    }
  }

  return maxKey.split(",");
};

mostVisitedPattern(
  (username = [
    "joe",
    "joe",
    "joe",
    "james",
    "james",
    "james",
    "james",
    "mary",
    "mary",
    "mary",
  ]),
  (timestamp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  (website = [
    "home",
    "about",
    "career",
    "home",
    "cart",
    "maps",
    "home",
    "home",
    "about",
    "career",
  ])
);
