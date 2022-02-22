module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  const middle = Math.floor((min_interval + max_interval) / 2);
  if (middle * middle === number) {
    return middle;
  }

  return sqrt_recursive(number, (min_interval + 1), middle);
}

// Binary search involving search through a sorted array, by using divide and conquer mechanism
// Finding the middle of the array, then comparing the middle with the target, 
// if the middle is greater than target, remove the right side, then adjust the middle to the center of the left side
// Do this recursively till you zone in on the target value.

// 1, we where not given an array
// 2, we do not know the target value

// 1, since the square root of a 25 is a 5 * 5 
// our target value becomes x * x = 25, what we are looking for is x
// based on binary search, firstly we take the min_value to be 0, and max value = number
// middle ( min_value + max_value ) / 2
// middle * middle is square root ? middle === 25 : run recursion again
// before running recursion, increment min_interval by 1.

//console.log(sqrt(25))
//console.log(sqrt(7056))
