"use strict";

const firstPalindrome = function (words) {
  let result = "";

  for (let word of words) {
    const reversedWord = word.split("").reverse().join("");
    if (word === reversedWord) {
      result = word;
      break;
    }
  }

  return result;
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
