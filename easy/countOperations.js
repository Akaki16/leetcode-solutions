"use strict";

const countOperations = function (num1, num2) {
  if (num1 === 0 || num2 === 0) return 0;

  let steps = 0;

  do {
    num1 >= num2 ? (num1 -= num2) : (num2 -= num1);
    steps += 1;
  } while (num1 !== 0 && num2 !== 0);

  return steps;
};

console.log(countOperations(51, 354));
console.log(countOperations(1121, 567));
