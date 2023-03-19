const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }   
        let arr = []

        for (let i = 0; i < n; i++) {
            if (i === 0 || i === 1) {
                arr.push(1);
            } else {
                arr.push((arr[i-1] + arr[i-2]));
            }
        }
        return arr[arr.length - 1];
    


};

// Do not edit below this line
module.exports = fibonacci;
