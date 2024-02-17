"use strict";

const numberOfSteps = function (num) {
  if (num === 0) return 0;

  let steps = 0;

  do {
    num % 2 === 0 ? (num /= 2) : (num -= 1);
    steps += 1;
  } while (num !== 0);

  return steps;
};

console.log(numberOfSteps(52));
console.log(numberOfSteps(351));
