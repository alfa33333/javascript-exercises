const add = function(a, b) {
  return a + b;	
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((a,b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce((a,b) => a * b, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(number) {
	return number === 0 ? 1 : number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
