"use strict";

const findMaxConsecutiveOnes = function (nums) {
  // Declare counter variable to keep track of ones (1)
  let count = 0;
  // Declare max counter variable and initialize it to zero, because we will have to calculat new max count of ones in the future
  let maxCount = 0;
  // Loop through nums array and if we encouter a one, increment count variable by one and calculate maximum count between maxCount and count.
  for (let num of nums) {
    if (num === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      // If num is not equal to one, reset counter variable to zero, so we can start counting again
      count = 0;
    }
  }
  // Finally return max count of ones
  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
