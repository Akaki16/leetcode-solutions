const arrayStringsAreEqual = function(word1, word2) {
    const str1 = join(word1);
    const str2 = join(word2);

    return str1 === str2;
};

function join(array) {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

console.log( arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']) );