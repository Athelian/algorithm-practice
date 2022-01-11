var generateParenthesis = function (n) {
  const memo = {}

  const go = (n) => {
    const res = [];
    if (n >= 3) {
      belowResult = go(n - 1);
      res.push(...belowResult.map((el) => "()" + el));
      res.push(
        ...belowResult
          .map((el) => el + "()").filter(el => !res.includes(el))
      );
      res.push(...belowResult.map((el) => "(" + el + ")"));
    } else if (n === 2) {
      res.push(...["()()", "(())"]);
    } else if (n === 1) {
      res.push("()");
    }
    if (n > 3) {
      let k = n - 2
      while (k > 2) {
        // 2 -> 3
        let left = memo[k]
        let right = memo[n - k]
        res.push(...left.flatMap(l => right.map((r) => l + r)).filter(el => !res.includes(el)))
        res.push(...left.flatMap(l => right.map((r) => r + l)).filter(el => !res.includes(el)))
        k--
      }      
    }
    memo[n] = res
    return res;
  };

  return go(n);
};

//1 4

generateParenthesis(4);

const below = generateParenthesis(4)
const me = generateParenthesis(5)
const they = ["((((()))))","(((()())))","(((())()))","(((()))())","(((())))()","((()(())))","((()()()))","((()())())","((()()))()","((())(()))","((())()())","((())())()","((()))(())","((()))()()","(()((())))","(()(()()))","(()(())())","(()(()))()","(()()(()))","(()()()())","(()()())()","(()())(())","(()())()()","(())((()))","(())(()())","(())(())()","(())()(())","(())()()()","()(((())))","()((()()))","()((())())","()((()))()","()(()(()))","()(()()())","()(()())()","()(())(())","()(())()()","()()((()))","()()(()())","()()(())()","()()()(())","()()()()()"]

let difference = they.filter(x => !me.includes(x));

console.log(difference)
