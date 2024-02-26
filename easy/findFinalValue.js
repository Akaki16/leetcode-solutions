"use strict";

const findFinalValue = function (nums, original) {
  if (nums.length === 0 || nums === null) {
    return [];
  }

  while (nums.includes(original)) {
    original *= 2;
  }

  return original;
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
