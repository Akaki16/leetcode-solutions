const findWordsContaining = function(words, x) {
    const indicies = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            indicies.push(i);
        }
    }

    return indicies;
};

console.log(findWordsContaining(['leet', 'code'], 'e'));