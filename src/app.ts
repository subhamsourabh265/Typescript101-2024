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
