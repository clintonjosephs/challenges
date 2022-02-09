function balancedBrackets(string) {
  let stack = [];
  let match = {
    "{":"}",
    "[":"]",
    "(":")"
  };

  for (i = 0; i < string.length; i++) {
      const pickedLetter = string.charAt(i);
      if (pickedLetter === "(" || pickedLetter === "[" || pickedLetter === "{") {
        stack.push(pickedLetter);
      } else if (pickedLetter === ")" || pickedLetter === "]" || pickedLetter === "}") {
           const lastItem = stack[stack.length - 1];
          if (match[lastItem] === pickedLetter) {
            stack.pop();
          }
      }
     
  }
  return stack.length > 0 ? false : true;
}



console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
