const finalValueAfterOperations = function(operations) {
    let counter = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '--X') {
            counter--;
        } else if (operations[i] === 'X++') {
            counter++;
        } else if (operations[i] === 'X--') {
            counter--;
        } else if (operations[i] === '++X') {
            counter++;
        }
    }

    return counter;
};

console.log(finalValueAfterOperations(['X++', 'X++', 'X++', 'X--']));