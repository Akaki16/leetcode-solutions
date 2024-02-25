"use strict";

const palindromeNumber = function (x) {
  const numReversed = Number(String(x).split("").reverse().join(""));
  return x === numReversed;
};

console.log(palindromeNumber(121));
console.log(palindromeNumber(-121));
