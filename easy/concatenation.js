const getConcatenation1 = function(nums) {
    return [...nums, ...nums];
};

const getConcatenation2 = function(nums) {
    return nums.concat(nums);
};

const getConcatenation3 = function(nums) {
    const resultArr = [];

    for (let i = 0; i < nums.length; i++) {
        resultArr.push(nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        resultArr.push(nums[i]);
    }

    return resultArr;
}

console.log(getConcatenation1([1, 2, 3]));
console.log(getConcatenation2([1, 2, 3]));
console.log(getConcatenation3([1, 2, 3]));