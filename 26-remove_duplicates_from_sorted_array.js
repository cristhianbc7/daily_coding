/*
    26. Remove Duplicates from Sorted Array

    Given an integer array nums sorted in non-decreasing 
    order, remove the duplicates in-place such that each
    unique element appears only once. The relative order of
    the elements should be kept the same. Then returns the
    number of unique elements in nums

    Consider the number of unique elements of nums to be k,
    to get accepted, you need to do the following things:

    -> Change the array nums such that the first k elements
       of nums contain the unique elements in the order they
       were present in nums initially. The remaining elements
       of nums are not important as well as the size of nums
    -> Return k

    Custo Judge:

    The judge will test your solution with the following code:

    int[] nums = [...]; // Input array
    int[] expectedNums = [...] // The expected answer with corret length

    int k = removeDuplicates(nums); // Calls your implementation

    assert k == expedtedNums.length;
    for(int i = 0; i < k; i++) {
        assert nums[i] == expectedNums[i];
    }

    If all assertions pass, then your solution will be accepted.
 */

/**
 * @param {number[]} nums
 * @returns {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    let k = 1; // The first element is always unique

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {            
            nums[index] = nums[i];
            index++;
            k++;
        }
    }

    return k;
};

let k1 = removeDuplicates([1,1,2]);
console.log(k1); // -> 2, nums = [1,2,_]


let k2 = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log(k2); // -> 5, nums = [0,1,2,3,4,_,_,_,_,_]