"use strict";

const isAcronym = function (words, s) {
  let word = "";

  for (let i = 0; i < words.length; i++) {
    word += words[i][0];
  }

  return word === s ? true : false;
};

console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
