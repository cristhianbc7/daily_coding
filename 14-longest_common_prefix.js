/*
    14. Longest Common Prefix

    Write a function to find the longest common prefix string
    among an array of strings.

    If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @returns {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ""

    for(let i = 0; i < strs[0].length; i++) {
        for(let y = 1; y < strs.length; y++) {
            if(strs[0][i] !== strs[y][i])
                return result
        }

        result = result + strs[0][i]
    }

    return result

};

test1 = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(test1); // -> "fl"

test2 = longestCommonPrefix(["dog", "racecar", "car"]);
console.log(test2); // -> ""