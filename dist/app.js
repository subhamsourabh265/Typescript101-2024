"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var person1 = {
    name: "SS",
    age: 30,
    hobbies: ["Sports", "Cooking"], // :string[] , array of strings
    role: [2, "ss"],
};
person1.role.push("ss1"); // push is allowed
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
var role1 = Role.ADMIN;
// Union Types : separated by '|'
function combine(input1, input2) {
    var result;
    result =
        typeof input1 === "number" && typeof input2 === "number"
            ? input1 + input2
            : input1.toString() + input2.toString();
    return result;
}
console.log(combine("name", "ss"));
//Literal types : actual values separated by '|'
var num = 8;
var res = 9;
var u1 = { name: "SS", age: 30 };
//Function return types, in case of undefined, use 'void' type
function add(n1, n2) {
    return n1 + n2;
}
// Function as types
var add2 = function (n1, n2) { return n1 + n2; };
var combinedValues = add2;
var add3;
add3 = add2;
// Unknown & Never type
var userInput;
var usrName;
userInput = 7; // error
function generateError1(message, code) {
    // never returns anything
    throw { message: message, errorCode: code };
    // return '2
}
// Classes
var Department = /** @class */ (function () {
    function Department(n, name // shorthand initialization
    ) {
        this.name = name;
        // name: string;
        // private employees: string[] = [];
        this.employees = []; // Inherited Class can access
        this.ids = [];
        this.name = n;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        var id1 = this.ids;
        console.log(id1);
    };
    Department.prototype.displayInfo = function () {
        console.log(this.employees);
        console.log(this.name);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var account = new Department('ss', 'accounting');
account.addEmployee('sou');
account.displayInfo();
// Class Inheritance
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'ss') || this; // calls the constructor of base class
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var acc = new ITDepartment('ss', ['MAx']);
//protected modifier
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'ss') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('not found');
        },
        set: function (value) {
            if (!value) {
                throw new Error('invalid value!!');
            }
            this.addReport(value);
            this.lastReport = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    AccountingDepartment.prototype.addEmployees = function () {
        this.employees.push('SOU');
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'SHU';
console.log(accounting.mostRecentReport);
//Static Properties and Methods
//Abstract Class
var Department1 = /** @class */ (function () {
    function Department1() {
    }
    return Department1;
}());
var ITDepartment1 = /** @class */ (function (_super) {
    __extends(ITDepartment1, _super);
    function ITDepartment1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITDepartment1.prototype.describe = function () {
        console.log('IT Department Abs');
    };
    return ITDepartment1;
}(Department1));
new ITDepartment1().describe();
var user1;
user1 = {
    name: 'ss',
    age: 30,
    greet: function () { return 'ss'; }
};
var Employee = /** @class */ (function () {
    function Employee(name) {
        var _this = this;
        this.name = name;
        this.age = 50;
        this.greet = function () {
            _this.name = 'shu';
        };
    }
    Employee.prototype.poke = function () {
        console.log('poked');
    };
    return Employee;
}());
var addFn;
addFn = function (a, b) { return a + b; };
//# sourceMappingURL=app.js.map