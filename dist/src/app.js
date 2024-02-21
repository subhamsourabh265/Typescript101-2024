"use strict";
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
const person1 = {
    name: 'SS',
    age: 30,
    hobbies: ['Sports', 'Cooking'], // :string[] , array of strings
    role: [2, 'ss']
};
person1.role.push('ss1'); // push is allowed
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTOR"] = 2] = "AUTOR";
})(Role || (Role = {}));
var Role1;
(function (Role1) {
    Role1[Role1["ADMIN"] = 1] = "ADMIN";
    Role1["READ_ONLY"] = "RO";
})(Role1 || (Role1 = {}));
const role1 = Role.ADMIN;
// Union Types : separated by '|'
function combine(input1, input2) {
    let result;
    result = typeof input1 === 'number' && typeof input2 === 'number' ? input1 + input2 : input1.toString() + input2.toString();
    return result;
}
console.log(combine('name', 'ss'));
//Literal types : actual values separated by '|'
let num = 8;
let res = 9;
const u1 = { name: 'SS', age: 30 };
//Function return types, in case of undefined, use 'void' type
function add(n1, n2) {
    return n1 + n2;
}
// Function as types 
let add2 = (n1, n2) => n1 + n2;
let combinedValues = add2;
let add3;
add3 = add2;
// Unknown & Never type
let userInput;
let usrName;
userInput = 7; // error
function generateError1(message, code) {
    throw { message: message, errorCode: code };
    // return '2
}
//# sourceMappingURL=app.js.map