/*
    700. Search in a Binary Search Tree

    You are given the root of a binary search tree (BST) and an integer val

    Find the node in the BST that the node's value equals val and return the 
    subtree rooted with that node. If such a node does not exist, return null
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode} 
 */
var searchBST = function(root, val) {
    // base case
    if (root === null) return null

    // check current node
    if (root.val === val) return root

    // recursive search
    if(val < root.val) return searchBST(root.left, val) // if val is less than the current node's value
    if(val > root.val) return searchBST(root.right, val) // if val is greater than the current node's value
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// create nodes
let node1 = new TreeNode(1);
let node3 = new TreeNode(3);
let node2 = new TreeNode(2, node1, node3);
let node7 = new TreeNode(7);
let root = new TreeNode(4, node2, node7);

let test1 = searchBST(root, 2);
console.log(test1); // -> [2,1,3]

let test2 = searchBST(root, 5);
console.log(test2); // -> []