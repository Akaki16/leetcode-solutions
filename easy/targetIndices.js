"use strict";

const targetIndices = function (nums, target) {
  if (nums.length === 0 || nums === null) {
    return [];
  }

  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === target) {
      result.push(i);
    }
  }

  return result;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(targetIndices([1, 2, 5, 2, 3], 3));
