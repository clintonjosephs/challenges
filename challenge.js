function sum(number) {
  // write your code here
    // write your code here
    if (number === 0) {
      return number;
    }
    return number + sum(number - 1);
}
