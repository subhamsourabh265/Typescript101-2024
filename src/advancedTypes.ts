// 1. Intersection Types
// 2. Type Guards
// 3. Discriminated Unions
// 4. Type Casting
// 5. Function Overloads


// Intersection Types

type Admin = {
    name: string;
    privileges: string[];
}

type Employees = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employees;

const el : ElevatedEmployee = {
    name: 'dd',
    privileges: ['as','ss'],
    startDate: new Date()
}

//Type Guards

type UnknownEmployee = Employees | Admin;

function displayEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: '+ emp.name);
    if('privileges' in emp) {   // Type Guard
        console.log('Privileges: ' + emp.privileges)
    }    
}

class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
    
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

interface Bird {
    type: 'bird',
    flyingSpeed: number;
}

interface Horse {
    type: 'horse',
    runningSpeed: number;
}

type Animal = Bird | Horse /// Discriminated Unions as only one of the properties is matching to discriminate;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;

    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 100});

// Type Casting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
const userInputElement = document.getElementById('user-input') as HTMLInputElement;
userInputElement.value = 'name';

// Index Properties
interface ErrorContainer { // { email: 'Not a valid email', userName: 'Must start with a character!'}
    id: string;
    [prop: string  | number]: string;
}

const errorBag: ErrorContainer = {
    id: 'emal1',
    email: 'Not a vaild email',
    userName: 'Must start with a character!'
}

// Function Overloads

const result = add(1,5);
function add4(a: number, b: number):  number;
function add4(a: string, b: string): string;
function add4(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result4 = add4('SS','SO');
result4.split('')

// optional Chaining
const userData = {
    id:'u1',
    name:'Ss',
    job: { title: 'CEO', description: 'own company'}
}

console.log(userData?.job?.title);

// Nullish Coalescing

// const storedData = userInput || 'DEFAULT'; // check truthy or falsy values

const storedData = userInput ?? 'DEFAULT'; // checks for null or undefined



console.log(storedData);