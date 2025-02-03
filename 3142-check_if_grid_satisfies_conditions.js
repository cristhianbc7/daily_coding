/*
    3142. Check if Grid Satisfies Conditions

    You are given a 2D matrix grid of size m x n. You need to check if each cell grid[i][j] is:
    -> equal to the cell below it, i.e. grid[i][j] == grid[i+1][j] (if it exists).
    -> different from the cell to its right, i.e. grid[i][j] != grid[i][j+1] (if it exists).
 */

/*
    Hint 1:
    Check if each column has same value in each cell.

    Hint 2:
    If the previous condition is satisfied, we can simply check the first cells 
    in adjacents columns.
*/

/** 
 * @param {number[][]} grid
 * @returns {boolean}
 */
var satisfiesConditions = function(grid) {
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            // i + 1 < grid.length && grid[i][j] !== grid[i+1][j] -> check columns
            //  j + 1 < grid[i].length && grid[i][j] === grid[i][j+1] -> check rows
            if(i + 1 < grid.length && grid[i][j] !== grid[i+1][j] || j + 1 < grid[i].length && grid[i][j] === grid[i][j+1]) return false;
        }
    }

    return true;
};

let test1 = satisfiesConditions([[1,0,2],[1,0,2]]);
console.log(test1); // -> true

let test2 = satisfiesConditions([[1,1,1], [0,0,0]]);
console.log(test2); // -> false

let test3 = satisfiesConditions([[1],[2],[3]]);
console.log(test3); // -> false



