const defangIPaddr = function(address) {
    const array = [];

    for (let char of address) {
        if (char === '.') {
            array.push('[.]');
        } else {
            array.push(char);
        }
    }

    return array.join('');
};

console.log( defangIPaddr("1.1.1.1") );