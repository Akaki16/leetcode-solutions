"use strict";

const shiftZeroes = function (nums) {
  let zeroCount = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroCount += 1;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    nums.push(0);
  }
};

const applyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }

  shiftZeroes(nums);

  return nums;
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
console.log(applyOperations([0, 1]));
