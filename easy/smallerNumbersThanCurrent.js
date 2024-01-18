const smallerNumbersThanCurrent = function(nums) {
    const resultArr = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j] && i !== j) {
                count++;
            }
        }
        resultArr.push(count);
    }

    return resultArr;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));