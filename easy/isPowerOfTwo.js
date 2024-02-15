"use strict";

const getBaseLog = function (x, y) {
  return Math.log(y) / Math.log(x);
};

const isPowerOfTwo = function (n) {
  if (n === 0) return false;

  const exp = Math.trunc(getBaseLog(2, n));
  return 2 ** exp === n ? true : false;
};

const testValues = [];
for (let i = 0; i <= 64; i++) {
  testValues.push(i);
}

for (let testValue of testValues) {
  console.log(`${testValue}: ${isPowerOfTwo(testValue)}`);
}
