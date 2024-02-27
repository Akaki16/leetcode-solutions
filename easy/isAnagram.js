"use strict";

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapS = {};
  const mapT = {};

  for (let char of s) {
    mapS[char] = (mapS[char] || 0) + 1;
  }

  for (let char of t) {
    mapT[char] = (mapT[char] || 0) + 1;
  }

  for (let c in mapS) {
    if (mapS[c] !== (mapT[c] || 0)) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
