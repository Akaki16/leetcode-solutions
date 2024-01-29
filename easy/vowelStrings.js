const vowelStrings = function(words, left, right) {
    let counter = 0;

    for (let i = left; i <= right; i++) {
        if (
        (words[i].startsWith('a')
            || words[i].startsWith('e')
            || words[i].startsWith('i')
            || words[i].startsWith('o')
            || words[i].startsWith('u')
        ) && (
            words[i].endsWith('a')
            || words[i].endsWith('e')
            || words[i].endsWith('i')
            || words[i].endsWith('o')
            || words[i].endsWith('u')
        )
        ) {
            counter++;
        }
    }

    return counter;
};

console.log( vowelStrings(['are', 'amy', 'you'], 0, 2) );