/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let i = 0;
  let sections = [];

  while (i < s.length) {
    if (parseInt(s[i]) !== NaN) {
      let k = i + 1;
      let stringBuilder = s[i];

      while (k < s.length && parseInt(s[k]) > 0) {
        stringBuilder += s[k];
        k++;
      }

      //Now must be open bracket
      stringBuilder += "[";
      let leftsOpen = 1;
      let rightsOpen = 0;
      let j = k + 1;

      while (j < s.length && leftsOpen !== rightsOpen) {
        stringBuilder += s[j];
        j++;
        if (s[j] === "[") leftsOpen++;
        if (s[j] === "]") rightsOpen++;
      }
      stringBuilder += "]";
      // Now j is on the final right bracket
      sections.push(stringBuilder);
      i = j;
    }

    i++;
  }

  // const inOut = (string) => {
  //   let i = string.length - 1;

  //   while (string[i])
  // };

  sections = sections.map((string) => {
    let a = string.split("[");
    a[a.length - 1] = a[a.length - 1].replace(/]/gi, "");
    return a;
  });

  let stringBuilder = "";

  sections.forEach((section) => {
    for (let i = section.length - 1; i >= 1; i--) {
      var numbers = section[i - 1].match(/\d+/g).map(Number)[0];
      section[i - 1] = section[i - 1] + section[i].repeat(numbers);
      section[i - 1] = section[i - 1].replace(/[0-9]/g, "");
    }
    stringBuilder += section[0];
  });

  return stringBuilder;
};

decodeString("2[abc]3[cd]ef");
