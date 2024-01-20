const mostWordsFound = function(sentences) {
    const numOfWords = [];

    for (let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i];
        numOfWords.push(sentence.split(' ').length);
    }

    return Math.max(...numOfWords);
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));