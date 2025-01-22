/*
    9. Palindrome Number

    Given an integer x, return true if x is a palindrome, and false otherwise.
*/

/**
 * @param {number} x
 * @returns {boolean}
 */
var isPalindrome = function(x) {
    let original = x;
    let reverse = 0;

    if(x < 0) {
        return false
    } else if (x > 0 && x < 10) {
        return true
    }
    
    while(x > 0) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x/10);
    }

    return original === reverse ? true : false;
};


test1 = isPalindrome(121);
console.log(test1); // -> true

test2 = isPalindrome(-121);
console.log(test2); // -> false

test3 = isPalindrome(10);
console.log(test3); // -> false