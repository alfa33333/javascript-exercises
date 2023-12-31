const sumAll = function(first, second) {
    let sum = 0;
    let begin = 0;
    let end = 0;
    if (first > second) {  
        begin = second;
        end = first;
    }
    else {
        begin = first;
        end = second;
    }

    if (begin < 0 || end < 0 || begin !==Number(begin) || end !== Number(end)) {
        return 'ERROR';
    }

    for (let i = begin; i <= end; i++) {
        sum += i;
    }
     return sum;
};

// Do not edit below this line
module.exports = sumAll;
