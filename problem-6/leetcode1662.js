var arrayStringsAreEqual = function (word1, word2) {
    let wordOne = '';
    for (let i = 0; i < word1.length; i++) {
        wordOne = wordOne + word1[i]
    }

    let wordTwo = '';
    for (let i = 0; i < word2.length; i++) {
        wordTwo = wordTwo + word2[i]
    }

    if (wordOne === wordTwo) {
        return true
    } else {
        return false
    }

};

console.log(arrayStringsAreEqual(['a', 'bc', 'de'], ['a', 'bc', 'de']));