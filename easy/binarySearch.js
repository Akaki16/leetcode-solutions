"use strict";

const binarySearch = function (nums, target) {
  let low = 0;
  let right = nums.length - 1;

  while (low <= right) {
    let mid = Math.floor((low + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([5, 10, 7, 12, 8, 6], 7));
