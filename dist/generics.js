"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = ['ss', 'so']; //same as string[]
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is done');
    });
});
// creating generic
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: 'ss', hobbies: ['sports'] }, { age: 33 });
console.log(mergedObj);
// constraints
function merge1(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj1 = merge1({ name: 'ss', hobbies: ['sports'] }, { age: 33 });
console.log(mergedObj1);
function countAndPrint(element) {
    var descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 elements.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndPrint('Hi SS'));
// keyof Constraint
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'ssh' }, 'name'));
// Generic classes
var StorageClass = /** @class */ (function () {
    function StorageClass() {
        this.data = [];
    }
    StorageClass.prototype.additem = function (item) {
        this.data.push(item);
    };
    StorageClass.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    StorageClass.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return StorageClass;
}());
var textStorage = new StorageClass();
// textStorage.additem(10)//error
textStorage.additem('ss');
textStorage.additem('su');
textStorage.additem('sh');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var names1 = ['ss0', 'ssl'];
// names1.push('kko'); // Error
//# sourceMappingURL=generics.js.map