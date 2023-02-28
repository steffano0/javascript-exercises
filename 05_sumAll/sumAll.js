const sumAll = function(number1, number2) {
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR"
    } else if ( number1 < 0 || number2 < 0) {
        return "ERROR"
    }
    let min;
    let max;
    if (number1 > number2) {
        min = number2;
        max = number1;
    } else {
        min = number1;
        max = number2;
    }
    let totalSum = 0;
    for (let i = min; i<=max; i++) {
        totalSum += i
    }
    return totalSum
};

// Do not edit below this line
module.exports = sumAll;
