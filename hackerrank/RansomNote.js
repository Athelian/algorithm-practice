function checkMagazine(magazine, note) {
    // Write your code here
  const arrayToMap = (arr) => arr.reduce((acc, el) => {
    acc[el] ? acc[el]++ : acc[el] = 1
    return acc
    }, 
  {})
  magazine = arrayToMap(magazine)
  for (let i = 0; i < note.length; i++) {
    if (magazine[note[i]]) {
      magazine[note[i]]--
    } else {
      return console.log("No")
    }
  }
  return console.log("Yes")
}

checkMagazine(["two", "times" ,"three" ,"is" ,"not", "four"], ["two" ,"times" ,"two" ,"is" ,"four"])