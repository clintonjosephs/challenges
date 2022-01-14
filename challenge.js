class Stack {
  constructor() {
    this.stack = [];
  }

  push(number) {
    // your code here
    this.stack.push(number);
  }
  
  pop() {
    // your code here
    this.stack.pop();
  }
  
  min() {
    // your code here
    return Math.min(...this.stack)
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
