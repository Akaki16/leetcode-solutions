const interpret = function(command) {
    const resultStr = [];

    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') {
            resultStr.push('G');
        } else if (command[i] === '(' && command[i + 1] !== 'a') {
            resultStr.push('o');
        } else if (command[i] === '(' && command[i + 1] === 'a') {
            resultStr.push('al');
        }
    }

    return resultStr.join('');
};

console.log( interpret('G()(al)') );