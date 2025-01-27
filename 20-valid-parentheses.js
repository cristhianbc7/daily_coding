/*
    20. Valid Parentheses

    Given a string s containing just the characters '(', ')',
    '{', '}', '[', ']', determine if the input string is 
    valid.

    An input string is valid if:

    1. Open brackets must be closed by the same types of brackets.
    2. Open brackets must be closed in the correct order.
    3. Every close bracket has a corresponding open bracket
        of the same type.
*/

/**
 * @param {string} s
 * @returns {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if(stack.length === 0) return false;
            let top = stack[stack.length - 1];
            switch(s[i]) {
                case ')':
                    if(top ==='(') {
                        stack.pop();
                    } else {
                        return false
                    }
                break;
                case '}':
                    if(top === '{') {
                        stack.pop();
                    } else {
                        return false
                    }
                break;
                case ']':
                    if(top === '[') {
                        stack.pop();
                    } else {
                        return false;
                    }
                break;
            }
        }
    }    

    return (stack.length === 0) ? true : false;
};

test1 = isValid('()');
console.log(test1); // -> true

test2 = isValid('()[]{}');
console.log(test2); // -> true

test3 = isValid('(]');
console.log(test3); // -> false

test4 = isValid('([])');
console.log(test4); // -> true

test71 = isValid(']');
console.log(test71); // -> false