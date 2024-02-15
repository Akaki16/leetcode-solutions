"use strict";

const firstUniqChar = function (s) {
  const lowerStr = s.toLowerCase();
  const chars = lowerStr.split("");

  let nonRepeating;
  const freq = {};

  for (let char of lowerStr) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of lowerStr) {
    if (freq[char] === 1) {
      nonRepeating = char;
      break;
    }
  }

  return chars.indexOf(nonRepeating);
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("lleettccooddee"));
