const countPairs = function(nums, target) {
    let goodPairsCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] + nums[j] < target) {
                goodPairsCount++;
            }
        }
    }

    return goodPairsCount;
};

console.log(countPairs([-1,1,2,3,1], 2));