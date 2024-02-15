"use strict";

const majorityElement = function (nums) {
  const n = nums.length;
  const freq = {};

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of nums) {
    if (freq[num] > n / 2) {
      return num;
    }
  }
};

console.log(majorityElement([1, 2, 2, 2, 2, 3, 4]));
console.log(majorityElement([30, 30, 30, 30, 2, 5]));
console.log(majorityElement([1, 2, 3, 4, 5]));
