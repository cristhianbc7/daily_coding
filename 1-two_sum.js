/* 
    1. Two Sum

    Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to
    target.

    You may assume that each input would have exactly one
    solution, and you may not use the same element twice.

    You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]} 
 */
var twoSum = function(nums, target) {
    let hashMap = {};

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if(complement in hashMap) {
            return [hashMap[complement], i];
        } else {            
            hashMap[nums[i]] = i;
        }
    }    
};

test1 = twoSum([2,7,11,15], 9);
console.log(test1); // -> [0,1]

test2 = twoSum([3,2,4], 6);
console.log(test2); // -> [1,2]

test3 = twoSum([3,3], 6);
console.log(test3); // -> [0,1]