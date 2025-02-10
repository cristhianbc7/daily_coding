/*
    1382. Balance a Binary Search Tree

    Given the root of a binary search tree, return a balanced binary
    search tree with the same node values. If there is more than one
    answer, return any of them.

    A binary search tree is balanced if the depth of the two subtrees
    of every node never differs by more than 1.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *  this.val = (val === undefined ? 0 : val)
 *  this.left = (left === undefined ? null : left)
 *  this.right = (right === undefined ? null : rigth)}
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode0}
 */
var balanceBST = function(root) {
    let nodeValues = []; // create an empty array to store node values

    /*
        Create a helper function to perform an inorder traversal
        of the BST and store the node values in an array. 
    */
    inorderTraversal(root, nodeValues);

    /*
        Create another helper function that takes the sorted
        array and constructs a balanced BST by recursively
        selection the middle element as the root 
    */
   return buildBalancedBST(nodeValues);

};

/**
 * Helper function to perform inorder traversal
 * @param {TreeNode} node 
 * @param {number[]} nodeValues
 */
var inorderTraversal = function(node, nodeValues) {
    if(node === null) return;
    inorderTraversal(node.left, nodeValues);
    nodeValues.push(node.val);
    inorderTraversal(node.right, nodeValues);
};

/**
 * Helper function to build a balanced BST
 * @param {number[]} nodeValues
 * @returns {TreeNode}
 */
var buildBalancedBST = function(nodeValues) {
    // base case
    if(nodeValues.length === 0) return null;

    // find the middle element
    let mid = Math.floor(nodeValues.length/2); 

    // create the root node
    let root = new TreeNode(nodeValues[mid]);

    // recursively build the left subtree
    root.left = buildBalancedBST(nodeValues.slice(0,mid));

    // recursively build the right subtree
    root.right = buildBalancedBST(nodeValues.slice(mid+1));

    // return the root node
    return root;
};

/* Example 1 

Input:
    1
     \
      2
       \
        3
         \
          4

Output:
    2
   / \
  1   3
       \
        4
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let node4 = new TreeNode(4);
let node3 = new TreeNode(3,undefined,node4);
let node2 = new TreeNode(2,undefined,node3);
let node1 = new TreeNode(1, undefined, node2);

let test1 = balanceBST(node1);
console.log(test1);
