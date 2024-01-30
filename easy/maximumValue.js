const maximumValue = function(strs) {
    const lenValues = [];

    for (let str of strs) {
        if (!isNaN(Number(str))) {
            lenValues.push(Number(str));
        } else {
            lenValues.push(str.length);
        }
    }

    return Math.max(...lenValues);
};

console.log( maximumValue(["alic3","bob","3","4","00000"]) );