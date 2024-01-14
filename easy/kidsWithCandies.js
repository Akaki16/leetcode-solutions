const kidsWithCandies = function(candies, extraCandies) {
    const booleanArray = [];
    const maxCandie = Math.max(...candies);

    for (let candie of candies) {
        if (candie + extraCandies >= maxCandie) {
            booleanArray.push(true);
        } else {
            booleanArray.push(false);
        }
    }

    return booleanArray;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));