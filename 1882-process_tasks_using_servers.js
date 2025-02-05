/*
    1882. Process Tasks Using Servers

    You are given two 0-indexed integer array servers and
    tasks of lenghts n and m respectively. servers[i] is the
    weight of the ith server, and tasks[j] is the time
    needed to process the jth task in seconds.

    Tasks are assigned to the servers using a task queue.
    Initially, all servers are free, and the queue is empty.

    At second j, the jth task is inserted into the queue
    (starting with the 0th task being inserted at second 0). As
    long as there are free servers and the queue is not empty,
    the task in the front of the queue will be assigned to a free
    server with smallest weight, and in case of a tie, it is
    assigned to a free server with the smallest index.

    It there are no free servers and the queue is not empty, we
    wait until a server becomes free and immediately assign the
    next task. If multiple servers become free at the same time,
    then multiple tasks from the queue will be assigned in order
    of insertion following the weight and index priorites above.

    A server that is assigned task j at second t will be free
    again at second t + task[j].

    Build an array ans of length m, where ans[j] is the index
    of the server the jth task will be assigned to.

    Return the array ans.
 */

/*
    Hint 1
    You can maintain a Heap of available Servers and a
    Heap of unavailable servers.

    Hint 2
    Note that the tasks will be processed in the input order
    so you just need to find the x-th server that will be
    available according to the rules.
*/

/* Based on -> Steven Inouye */

/**
 * @param {number[]} servers 
 * @param {number[]} tasks
 * @returns {number[]}
 */
var assignTasks = function(servers, tasks) {
// create a heap to manage free servers.
    // free servers will need to be prioritized by weight and index
    const freeServers = new Heap((serverA, serverB) => (
        serverA.weight - serverB.weight || serverA.index - serverB.index
    ));

    // create a heap to manage used servers.
    // used servers will need to be prioritized by availableTime, weight and index
    const usedServers = new Heap((serverA, serverB) => (
        serverA.availableTime - serverB.availableTime || 
        serverA.weight - serverB.weight || 
        serverA.index - serverB.index
    ));
    
    // add all the servers into the free servers heap with the time it is available
    // being 0
    for (let i = 0; i < servers.length; i++) {
        freeServers.push({ weight: servers[i], index: i, availableTime: 0 })
    }
    
    const result = [];
    for (let i = 0; i < tasks.length; i++) {
        // find all the servers that are available and add them to the
        // free servers heap
        while (usedServers.size() && usedServers.peak().availableTime <= i) {
            freeServers.push(usedServers.pop());
        }
        // get the free server with the lowest weight or lower index
        // or the usedServer with the lowest start time.
        const server = freeServers.pop() || usedServers.pop();
        result.push(server.index);
        const availableTime = Math.max(i, server.availableTime);
        server.availableTime = availableTime + tasks[i];
        usedServers.push(server);
    }
    return result;
};

class Heap {

    /**
     * Create a Heap
     * @param {function} compareFunction - compares child and parent element
     * to see if they should swap.  If return value is less than 0 it will
     * swap to prioritize the child.
     */
    constructor(compareFunction) {
        this.store = [];
        this.compareFunction = compareFunction;
    }
    
    peak() {
        return this.store[0];
    }
    
    size() {
        return this.store.length;
    }
    
    pop() {
        if (this.size() < 2) {
            return this.store.pop();
        }
        const result = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return result;
    }
    
    push(val) {
        this.store.push(val);
        this.heapifyUp(this.size() - 1);
    }
        
    heapifyUp(child) {
        while (child) {
            const parent = Math.floor((child - 1) / 2);
            
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                child = parent;
            } else {
                return child;
            }
        }
    }
    
    heapifyDown(parent) {
        while (true) {
            let [child, child2] = [1,2].map((x) => parent * 2 + x).filter((x) => x < this.size());
            if (this.shouldSwap(child2, child)) {
                child = child2;
            }
            
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                parent = child;
            } else {
                return parent;
            }
        }
    }
    
    shouldSwap(child, parent) {
        return child && this.compareFunction(this.store[child], this.store[parent]) < 0;
    }
}

let test1 = assignTasks([3,3,2], [1,2,3,2,1,2]);
console.log(test1); // -> [2,2,0,2,1,2]

let test2 = assignTasks([5,1,4,3,2], [2,1,2,4,5,2,1]);
console.log(test2); // -> [1,4,1,4,1,3,2]

let testcase2 = assignTasks([10,63,95,16,85,57,83,95,6,29,71], [70,31,83,15,32,67,98,65,56,48,38,90,5]);
console.log(testcase2); // -> [8,0,3,9,5,1,10,6,4,2,7]

let extraTest = assignTasks([1,2,3], [5,4,3,1,2]);
console.log(extraTest); // -> [0,1,2,0,1]

let testcase26 = assignTasks([10,63,95,16,85,57,83,95,6,29,71], [70,31,83,15,32,67,98,65,56,48,38,90,5]);
console.log(testcase26); // -> [8,0,3,9,5,1,10,6,4,2,7,9,0]
