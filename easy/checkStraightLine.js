"use strict";

const checkStraightLine = function (coordinates) {
  if (coordinates.length < 2) {
    return false;
  }

  const sameX = coordinates.every((point) => point[0] === coordinates[0][0]);
  if (sameX) {
    return true;
  }

  const slopes = [];
  let result = true;

  for (let i = 0; i < coordinates.length - 1; i++) {
    const deltaX = coordinates[i + 1][0] - coordinates[i][0];
    const deltaY = coordinates[i + 1][1] - coordinates[i][1];

    if (deltaX === 0) {
      slopes.push(Infinity);
    } else {
      const slope = deltaY / deltaX;
      slopes.push(slope);
    }
  }

  for (let i = 1; i < slopes.length; i++) {
    if (slopes[i] !== slopes[0]) {
      result = false;
    }
  }

  return result;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);
