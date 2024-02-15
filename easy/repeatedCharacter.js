"use strict";

const repeatedCharacter = function (s) {
  const set = new Set();

  for (let char of s) {
    if (set.has(char)) {
      return char;
    }
    set.add(char);
  }
};

console.log(repeatedCharacter("abccbaacz"));
