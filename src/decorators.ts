function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template:string, hookId: string) {
    return function<T extends { new(...args: any[]): {name1: string}} >(originalConstructor: T) {        
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.style.textAlign = this.name1;
                }
            }
        }
    }
}

@Logger('Hey Logger here....')
@WithTemplate('<h1>My Person Object<h1>','app') // Decorators execute bottom to up, but decorators factory execute sequentially
class Person1 {
    name1 = 'center';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person1();

console.log(pers);


function Log(target: Product, propertyName: string) { // Propert Decorators
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: Product, name: string, descriptor: PropertyDescriptor) { // Accessor decorator
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3 (target: any, name: string | Symbol, descriptor: PropertyDescriptor) { // Method decorator
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4 (target: any, name: string | Symbol, position: number) { // Parameter Decorator
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;

    private _price: number

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

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

function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: false,
        enumerable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class printer1 {
    message = "Done!";

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p1 = new printer1();

const clickMeBtn1 = document.querySelector('#clickMeBtn')!;

clickMeBtn1.addEventListener('click', p1.showMessage);

// Validation with decorators

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]  // 'required', 'positive'
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
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

class Course {
    @Required
    title: string;


    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.querySelector('#title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;
    
    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log('created course');
    console.log(createdCourse);
});



