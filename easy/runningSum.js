const runningSum = function(nums) {
    const runningSum = [];
    let sum = 0;

    for (let num of nums) {
        sum += num;
        runningSum.push(sum);
    }

    return runningSum;
};

console.log(runningSum([1,2,3,4]));