const removeFromArray = function(array, ...args) {
    
    args.forEach(arg => {
    let idx = array.indexOf(arg);
        if (idx > -1) {
            array.splice(idx, 1);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
