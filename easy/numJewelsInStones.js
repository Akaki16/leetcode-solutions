"use strict";

const numJewelsInStones = function (jewels, stones) {
  const arr1 = jewels.split("");
  const arr2 = stones.split("");

  const result = arr2.filter((stone) => arr1.includes(stone));

  return result.length;
};

console.log(numJewelsInStones("aA", "aAAbbb"));
