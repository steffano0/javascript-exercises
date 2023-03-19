const palindromes = function (string) {
    let left = 0;
    let right = string.length - 1
    const lower = string.toLowerCase();

    while (left <= right) {
        while (!lower.charAt(left).match(/^[a-zA-Z0-9]+$/)) {
            left++;
        }
        while (!lower.charAt(right).match(/^[a-zA-Z0-9]+$/)) {
            right--;
        }
        if (lower.charAt(left) === lower.charAt(right)) {
            left++;
            right--;
        } else {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
