const findTheOldest = function(arr) {
    
    for (i in arr) {
        if (!arr[i].yearOfDeath) {
            arr[i]["yearOfDeath"] = new Date().getFullYear();
        }
    }
    const sortedArr = arr.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);

    return sortedArr[0];

};





// Do not edit below this line
module.exports = findTheOldest;
