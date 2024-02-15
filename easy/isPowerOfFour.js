"use strict";

const getBaseLog = function (x, y) {
  return Math.log(y) / Math.log(x);
};

const isPowerOfFour = function (n) {
  if (n === 0) return false;

  const exp = Math.trunc(getBaseLog(4, n));
  return 4 ** exp === n ? true : false;
};

console.log(isPowerOfFour(0));
console.log(isPowerOfFour(16));
