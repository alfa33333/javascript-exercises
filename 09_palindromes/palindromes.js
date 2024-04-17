const palindromes = function (input) {
    let inputString = input.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    let reversedString = inputString.split('').reverse().join('');
    return inputString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
