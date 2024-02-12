"use strict";

const moveZeroes = function (nums) {
  let numsCount = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    if (num === 0) {
      numsCount++;
      nums.splice(i, 1);
    }
  }

  for (let i = 0; i < numsCount; i++) {
    nums.push(0);
  }
};

const array = [0, 1, 0, 3, 12];
moveZeroes(array);

console.log(array);
