const reverseString = function(string) {

    let array = string.split('');
    let reversedString = array.reverse().join('');

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
