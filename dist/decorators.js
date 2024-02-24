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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                var hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.style.textAlign = _this.name1;
                }
                return _this;
            }
            return class_1;
        }(originalConstructor));
    };
}
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name1 = 'center';
        console.log('Creating person object...');
    }
    Person1 = __decorate([
        Logger('Hey Logger here....'),
        WithTemplate('<h1>My Person Object<h1>', 'app') // Decorators execute bottom to up, but decorators factory execute sequentially
    ], Person1);
    return Person1;
}());
var pers = new Person1();
console.log(pers);
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('Invalid price');
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    __decorate([
        Log2
    ], Product.prototype, "price", null);
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product.prototype, "getPriceWithTax", null);
    return Product;
}());
// class printer {
//     message = "Done!";
//     showMessage() {
//         console.log(this.message);
//     }
// }
// const p = new printer();
// const clickMeBtn = document.querySelector('#clickMeBtn');
// clickMeBtn.addEventListener('click', p.showMessage.bind(p));
// Using Decorator
function Autobind(target, methodName, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: false,
        enumerable: true,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
var printer1 = /** @class */ (function () {
    function printer1() {
        this.message = "Done!";
    }
    printer1.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        Autobind
    ], printer1.prototype, "showMessage", null);
    return printer1;
}());
var p1 = new printer1();
var clickMeBtn1 = document.querySelector('#clickMeBtn');
clickMeBtn1.addEventListener('click', p1.showMessage);
var registeredValidators = {};
function Required(target, propName) {
    var _a;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = ['required'], _a));
}
function PositiveNumber(target, propName) {
    var _a;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = ['positive'], _a));
}
function validate(obj) {
    var objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    var isValid = true;
    for (var prop in objValidatorConfig) {
        for (var _i = 0, _a = objValidatorConfig[prop]; _i < _a.length; _i++) {
            var validator = _a[_i];
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
var Course = /** @class */ (function () {
    function Course(t, p) {
        this.title = t;
        this.price = p;
    }
    __decorate([
        Required
    ], Course.prototype, "title", void 0);
    return Course;
}());
var courseForm = document.querySelector('form');
courseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var titleEl = document.querySelector('#title');
    var priceEl = document.getElementById('price');
    var title = titleEl.value;
    var price = +priceEl.value;
    var createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log('created course');
    console.log(createdCourse);
});
//# sourceMappingURL=decorators.js.map