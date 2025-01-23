/*
    13. Roman to Integer

    Roman numerals are represented by seven different symbols:
    I, V, X, L, C, D and M.

    Symbol  Value
    I       1
    V       5
    X       10
    L       50
    C       100
    D       500
    M       1000

    For example, 2 is writen as II in Roman numeral, just two ones added together.
    12 is written as XII, which is simply X + II. The number 27 is written as XXVII,
    which is XX + V + II.

    Roman numerals are usually written largest to smallest from left to right. However,
    the numeral for four is not IIII. Instead, the number four is written as IV. Because
    the one is before the five we subtract it making four. The same principle applies to
    the number nine, which is written as IX. There are six instances where subtraction
    is used:

    -> I can be placed before V (5) and X (10) to make 4 and 9.
    -> X can be placed before L (50) and C (100) to make 40 and 90.
    -> C can be placed before D (500) and M (1000) to make 400 and 900.

    Given a roman numeral, convert it to an integer.
*/

/**
 * @param {string} s
 * @returns {number}
 */
var romanToInt = function(s) {
    let result = 0;

    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for(let i = 0; i < s.length; i++) {
        if(i < s.length - 1 && map[s[i]] < map[s[i+1]]) 
             result = result - map[s[i]] 
        else 
            result = result + map[s[i]]
    }

    return result
};

test1 = romanToInt('III');
console.log(test1); // -> 3

test2 = romanToInt('LVIII'); 
console.log(test2); // -> 58

test3 = romanToInt('MCMXCIV');
console.log(test3); // -> 1994