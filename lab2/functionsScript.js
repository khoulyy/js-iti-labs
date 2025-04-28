function capitalize(sentence) {
    let result = '';
    let capitalizeNext = true;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === ' ') {
            result += char;
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += char.toUpperCase();
            capitalizeNext = false;
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}

console.log(capitalize('hello, world this is my solution'));

function findLongestWord(sentence) {
    let longestWord = '';
    let currentWord = '';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char !== ' ') {
            currentWord += char;
        } else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = '';
        }
    }

    return longestWord;
}

function sortAlphabet(val) {
    return val.split('').sort().join('');
}

function commElements(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}