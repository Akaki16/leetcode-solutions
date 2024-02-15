"use strict";

const findPeaks = function (mountain) {
  const peaks = [];

  // Ignore first and last elements
  for (let i = 1; i < mountain.length - 1; i++) {
    const num = mountain[i];
    const prev = mountain[i - 1];
    const next = mountain[i + 1];
    if (num > prev && num > next) {
      peaks.push(i);
    }
  }

  return peaks;
};

console.log(findPeaks([2, 4, 4]));
console.log(findPeaks([1, 4, 3, 8, 5]));
