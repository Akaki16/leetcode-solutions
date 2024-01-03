const numIdenticalPairs = function(nums) {
    let goodPairs = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                goodPairs++;
            }
        }
    }

    return goodPairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));