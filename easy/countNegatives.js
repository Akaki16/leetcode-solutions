"use strict";

const countNegatives1 = function (grid) {
  const nums = grid.flat();
  let count = 0;

  for (let num of nums) {
    if (num < 0) count++;
  }

  return count;
};

const countNegatives2 = function (grid) {
  let str = "";
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    str += grid[i].toString();
  }

  for (let char of str) {
    if (char.includes("-")) {
      count++;
    }
  }

  return count;
};

console.log(
  countNegatives1([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNegatives1([
    [3, 2],
    [1, 0],
  ])
);

console.log(
  countNegatives2([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNegatives2([
    [3, 2],
    [1, 0],
  ])
);
