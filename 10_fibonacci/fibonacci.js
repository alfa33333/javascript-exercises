const fibonacci = function(positionInput) {
    fib = [0, 1];
    position = parseInt(positionInput, 10);
    if (position < 0)
    {
        return "OOPS";
    } else if (position >= 2)
    {
        for (let i = 2; i <= position; i++)
        {
            temp = fib.reduce((a, b) => a + b, 0);
            fib[0] = fib[1];
            fib[1] = temp;
        }
    }
    return fib[1];
};

// Do not edit below this line
module.exports = fibonacci;
