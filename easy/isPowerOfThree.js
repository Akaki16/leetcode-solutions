"use strict";

const getBaseLog = function (x, y) {
  return Math.log(y) / Math.log(x);
};

const isPowerOfThree = function (n) {
  if (n === 0) return false;

  const exp = Math.trunc(getBaseLog(3, n));
  return 3 ** exp === n ? true : false;
};

const testValues = [];
for (let i = 0; i <= 81; i++) {
  testValues.push(i);
}

for (let testValue of testValues) {
  console.log(`${testValue}: ${isPowerOfThree(testValue)}`);
}
