const names: Array<string> = ['ss','so']; //same as string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done')
    })
})

// creating generic

function merge<T extends {}, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'ss', hobbies: ['sports']}, {age: 33});
console.log(mergedObj);

// constraints

function merge1<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj1 = merge1({name: 'ss', hobbies: ['sports']}, {age: 33});
console.log(mergedObj1);

interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 elements.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndPrint('Hi SS'));


// keyof Constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'ssh'},'name'));

// Generic classes

class StorageClass<T> {
    private data: T[] = [];

    additem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new StorageClass<string>();
// textStorage.additem(10)//error
textStorage.additem('ss');
textStorage.additem('su');
textStorage.additem('sh');
console.log(textStorage.getItems());

// Generic utility types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names1: Readonly<string[]> = ['ss0', 'ssl'];
// names1.push('kko'); // Error
