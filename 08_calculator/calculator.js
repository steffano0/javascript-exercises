const add = function(a, b) {
  return a + b
	
};

const subtract = function(a, b) {
  return a - b
	
};

const sum = function(a) {
	return a.reduce((s, i) => s + i , 0)
};

const multiply = function(a) {
  return a.reduce ((m, i) => m * i,1)
};

const power = function(a, b) {
  return a ** b
	
};

const factorial = function(n) {
	if (n > 1) {
    return n * factorial(n-1)
  } else {
    return 1
  }
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
