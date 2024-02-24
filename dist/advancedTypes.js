"use strict";
// 1. Intersection Types
// 2. Type Guards
// 3. Discriminated Unions
// 4. Type Casting
// 5. Function Overloads
var _a;
var el = {
    name: 'dd',
    privileges: ['as', 'ss'],
    startDate: new Date()
};
function displayEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) { // Type Guard
        console.log('Privileges: ' + emp.privileges);
    }
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 100 });
// Type Casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
var userInputElement = document.getElementById('user-input');
userInputElement.value = 'name';
var errorBag = {
    id: 'emal1',
    email: 'Not a vaild email',
    userName: 'Must start with a character!'
};
// Function Overloads
var result = add(1, 5);
function add4(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result4 = add4('SS', 'SO');
result4.split('');
// optional Chaining
var userData = {
    id: 'u1',
    name: 'Ss',
    job: { title: 'CEO', description: 'own company' }
};
console.log((_a = userData === null || userData === void 0 ? void 0 : userData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish Coalescing
// const storedData = userInput || 'DEFAULT'; // check truthy or falsy values
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT'; // checks for null or undefined
console.log(storedData);
//# sourceMappingURL=advancedTypes.js.map