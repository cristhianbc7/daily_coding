/*
    1603. Design Parking System

    Design a parking system for a parking lot. The  parking lot has three
    kinds of parking spaces: big, medium, and small, with a fixed number
    of slots for each size.

    Implement the ParkingSystem class:

    - ParkingSystem(int big, int medium, int small). Initializes
    object of the ParkingSystem class. The number of slots for each
    parking space are given as part of the constructor.
    - bool addCar(int carType). Checks whether there is a parking
    space of carType for the car that wants to get into the parking
    lot. carType can be of three kinds: big, medium, or small, which
    are represented by 1,2, and 3 respectively. A car can only
    park in a parking space of its carType. If there is no space
    available, return false, else park the car in that size space
    and return true
 */

/*
    Hint 1
    Record number of parking slots still available for each car type.
 */

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.slots = [big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(this.slots[carType - 1] > 0) {
        this.slots[carType - 1]--;
        return true; 
    }

    return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

let test1 = new ParkingSystem(1,1,0);
console.log(test1.addCar(1)); // -> true
console.log(test1.addCar(2)); // -> true
console.log(test1.addCar(3)); // -> false
console.log(test1.addCar(1)); // -> false
