"use strict";

const isPalindrome = function (x) {
  const reversedNum = Number(String(x).split("").reverse().join(""));
  return reversedNum === x;
};

console.log(isPalindrome(121));
console.log(isPalindrome(355));
