/*
    21. Merge Two Sorted Lists

    You are given the heads of two sorted linked lists list1
    and list2.

    Merge the two into one sorted list. The list should be
    made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.
 */
 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *      this.val = ( val === undefined ? 0 : val )
 *      this.next = (next === undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = ( val === undefined ? 0 : val )
    this.next = ( next === undefined ? null : next )
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let merged = new ListNode();
    let current = merged;
    let pointer1 = list1;
    let pointer2 = list2;

    while(pointer1 !== null || pointer2 !== null) {

        let value1 = pointer1 !== null ? pointer1.val : Infinity;
        let value2 = pointer2 !== null ? pointer2.val : Infinity; 

        if(value1 < value2) {
            current.next= new ListNode(value1);
            current = current.next;

            pointer1 = pointer1.next;

        } else {            
            current.next = new ListNode(value2);
            current = current.next;

            pointer2 = pointer2.next;
        }
    }

    return merged.next;
};


/**
 * @param {ListNode} list
 */
function printList(list) {
    let current = list;
    while(current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

// testcases

let list1 = new ListNode(1, new ListNode(2, new ListNode(4))); // 1 -> 2 -> 4
let list2 = new ListNode(1, new ListNode(3, new ListNode(4))); // 1 -> 3 -> 4
test1 = mergeTwoLists(list1, list2);
console.log('--- test 1 ---');
printList(test1); // 1 -> 1 -> 2 -> 3 -> 4 -> 4

let list3 = null;
let list4 = null;
test2 = mergeTwoLists(list3, list4);
console.log('--- test 2 ---');
printList(test2) // null

let list5 = null;
let list6 = new ListNode(0);
test3 = mergeTwoLists(list5, list6);
console.log('--- test 3 ---');
printList(test3) // 0