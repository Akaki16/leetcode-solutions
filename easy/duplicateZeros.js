"use strict";

const duplicateZeros = function (arr) {
  if (arr.length === 0 || arr === null) {
    return [];
  }

  const length = arr.length;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
    }
  }

  arr.length = length;

  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([1, 2, 3]));
