const maximumCount = function(nums) {
    const numValues = [];
    let negative = 0;
    let positive = 0;
    
    for (let num of nums) {
        if (num < 0) {
            negative++;
            numValues.push(negative);
        }

        if (num > 0) {
            positive++;
            numValues.push(positive);
        }
    }

    const max = Math.max(...numValues);

    return max === -Infinity ? 0 : max;
};

console.log( maximumCount([-2,-1,-1,1,2,3]) );