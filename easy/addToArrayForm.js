const addToArrayForm = function(num, k) {
    const numberStr = num.join('');
    const newNumber = BigInt(numberStr) + BigInt(k);
    return String(newNumber).split('');
};

console.log( addToArrayForm([1, 2, 0, 0], 34) );