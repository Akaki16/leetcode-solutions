"use strict";

const dominantIndex = function (nums) {
  const numsCopy = [...nums];

  const maxValue = Math.max(...numsCopy);
  const maxValueIdx = numsCopy.indexOf(maxValue);

  numsCopy.splice(maxValueIdx, 1);

  const result = numsCopy.every((num) => maxValue >= 2 * num);

  return result ? maxValueIdx : -1;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
