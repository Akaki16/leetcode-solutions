const arraySign = function (nums) {
  let product = 1;

  for (let i = 0; i < nums.length; i += 1) {
    product = product * nums[i];
  }

  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
