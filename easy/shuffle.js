const shuffle = function(nums, n) {
    const shuffledArr = [];

    for (let i = 0; i < n; i++) {
        shuffledArr.push(nums[i], nums[i + n]);
    }

    return shuffledArr;
};