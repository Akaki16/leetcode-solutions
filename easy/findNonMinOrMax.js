"use strict";

const findNonMinOrMax = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  let result = -1;

  for (let num of nums) {
    if (num !== min && num !== max) {
      result = num;
      break;
    }
  }

  return result;
};

console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
