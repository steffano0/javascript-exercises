const removeFromArray = function(array) {
    
    for (let i = 1; i < arguments.length; i++) {

        if (array.includes(arguments[i])) {
            const index = array.indexOf(arguments[i]);
            array.splice(index,1);
        } else {
            continue
        }
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
