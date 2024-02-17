"use strict";

const singleNumber = function (nums) {
  const freq = {};
  let result;

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of nums) {
    if (freq[num] === 1) {
      result = num;
      break;
    }
  }

  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5]));
