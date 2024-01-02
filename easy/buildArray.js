const buildArray = function(nums) {
    const resultArr = [];

    for (let i = 0; i < nums.length; i++) {
        resultArr.push(nums[nums[i]]);
    }

    return resultArr;
};

console.log(buildArray([1, 2, 3, 4, 5]));