/*
    2635. Apply Transform Over Each Element in Array

    Given an integer array arr and a mapping function fn, return a new array with a
    transformation applied to each element.

    The returned array should be created such that returnedArray[i] = fn(arr[i], i).

    Please solve it without the built-in Array.map method.
*/

/*
    Hint 1
    Start by creating an array that will eventually be returned

    Hint 2
    Loop over each element in the passed array. Push
    fn(arr[i]) to the returned array
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @returns {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = [];

    for(let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i));
    }

    return returnedArray;

};

var plusOne = function(n) {
    return n + 1
}; // The function increases each value in the array by one

var plusI = function(n, i) {
    return n + i
} // The function increases each value by the index it resides in

var constant = function() {
    return 42
} // The function always returns 42

let test1 = map([1,2,3], plusOne)
console.log(test1); // -> [2,3,4]


let test2 = map([1,2,3], plusI);
console.log(test2); // -> [1,3,5] 


let test3 = map([10,20,30], constant);
console.log(test3); // -> [42,42,42]