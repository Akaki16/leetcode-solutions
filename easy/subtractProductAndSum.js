"use strict";

const calculateSum = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    sum += num;
  }

  return sum;
};

const calculateProduct = function (arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    product *= num;
  }

  return product;
};

const subtractProductAndSum = function (n) {
  const arr = String(n).split("");

  const sum = calculateSum(arr);
  const product = calculateProduct(arr);

  const difference = product - sum;

  return difference;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
