class Stack {

  constructor() {
    this.items = [];
    this.minValue = null;
    this.oldMin = null;
  }

  push = (number) => {
    // your code here
    this.items.push(number);
    if ( this.minValue === null || number < this.minValue ) {
      this.oldMin = this.minValue;
      this.minValue = number;
    }
    return this.items;
  }
  
  pop = () =>  {
    // your code here
    if (this.items[this.items.length - 1] === this.minValue) {
      this.minValue = this.oldMin;
    }
    return this.items.pop();
  }
  
  min = () => this.minValue;
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
