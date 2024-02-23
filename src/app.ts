console.log("started!!");
//
//.... Core Types in TS.....
// number :
// string : All text values
// boolean : true/false
//

//.. Object Types..
// object

//..Array Types
// Array

//...Tuple types
//Tuple : Fixed length and fixed type array

// Enum:

// Any : ANy kind of value (avoid using any type)

const person1: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple
} = {
  name: "SS",
  age: 30,
  hobbies: ["Sports", "Cooking"], // :string[] , array of strings
  role: [2, "ss"],
};

person1.role.push("ss1"); // push is allowed

enum Role {
  ADMIN,
  READ_ONLY,
  AUTOR,
}

enum Role1 {
  ADMIN = 1,
  READ_ONLY = "RO",
}

const role1 = Role.ADMIN;

// Union Types : separated by '|'

function combine(input1: number | string, input2: number | string) {
  let result;
  result =
    typeof input1 === "number" && typeof input2 === "number"
      ? input1 + input2
      : input1.toString() + input2.toString();
  return result;
}

console.log(combine("name", "ss"));

//Literal types : actual values separated by '|'

let num: 9 | 8 = 8;

//Type Aliases/Custom Types

type Combinable = number | string;
let res: Combinable = 9;

type User = { name: string; age: number };
const u1: User = { name: "SS", age: 30 };

//Function return types, in case of undefined, use 'void' type

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Function as types

let add2 = (n1: number, n2: number) => n1 + n2;

let combinedValues: Function = add2;

let add3: (a: number, b: number) => number;
add3 = add2;

// Unknown & Never type

let userInput: unknown;
let usrName: string;

userInput = 7; // error

function generateError1(message: string, code: number): never {
  // never returns anything
  throw { message: message, errorCode: code };
  // return '2
}


// Classes

class Department {
    // name: string;
    // private employees: string[] = [];
    protected employees: string[] = []; // Inherited Class can access
    private readonly ids: string[] = []

    static fiscalYear = 2020;

    constructor(
        n: string,
        private name: string// shorthand initialization
    ) {
        this.name = n;
    }

    static createEmployee(name: string) {
        return {name}
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
        const id1 = this.ids;
        console.log(id1);
    }

    displayInfo() {
        console.log(this.employees);
        console.log(this.name);
    }
}

const account = new Department('ss','accounting');
account.addEmployee('sou');
account.displayInfo();

// Class Inheritance

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'ss'); // calls the constructor of base class
    }
}

const acc = new ITDepartment('ss',['MAx']);

//protected modifier

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('not found');    
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('invalid value!!');
        }
        this.addReport(value);
        this.lastReport = value;
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'ss');
        this.lastReport = reports[0]!;
    }

    addReport(report: string) {
        this.reports.push(report);
    }


    addEmployees() {
        this.employees.push('SOU');
    }
}

const accounting = new AccountingDepartment('d2',[]);
accounting.mostRecentReport = 'SHU';
console.log(accounting.mostRecentReport);

//Static Properties and Methods

//Abstract Class

abstract class Department1 {
    abstract describe(): void;
}

class ITDepartment1 extends Department1 {
    describe() {
        console.log('IT Department Abs');
    }
}

new ITDepartment1().describe();      

//Interface

interface Person {
    readonly name: string;  // readonly can be set on interfaces
    age: number | string;

    outName?: string; // Optional params

    greet(phrase: string): void;
}

let user1: Person | string;

user1 = {
    name: 'ss',
    age: 30,
    greet: () => 'ss'
}

class Employee implements Person {
    age = 50;

    constructor(public name: string) { }

    greet = () => {
        this.name = 'shu';
    }

    poke() {
        console.log('poked');
    }


}

interface AnotherInterface {

}

interface Greetable extends Person, AnotherInterface { // multiple interfaces can be extended by interface
    
}

// Interface as function type

interface AddFn {
    (a: number, b: number): number;
}

let addFn: AddFn;

addFn = (a: number, b: number) => a+b;



