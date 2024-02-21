"use strict";

const heightChecker = function (heights) {
  if (heights.length === 0 || heights === null) {
    return [];
  }

  const sortedHeights = [...heights].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) count++;
  }

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5, 1, 2, 3, 4]));
console.log(heightChecker([1, 2, 3, 4, 5]));
