
const names: Array<string> = ['Max', 'Tim']; // string[]

const promise: Promise<string | number> = new Promise((resolve, reject) => {
    resolve('Finished');
});

// promise.then(data => data.split(' '));

// const merge: <T extends object, U extends object> = (obja: T, objb: U) => { // Won't work..
// function merge<T, U> (obja: T, objb: U) {
function merge<T extends object, U extends object> (obja: T, objb: U) {
    return {...obja, ...objb};
}

const obj1 = {
    name: 'Test 1',
    age: 30
}

const obj2 = {
    title: 'Test 2'
}

const result = merge(obj1, obj2);
console.log(result.age);

interface Lenghty {
    length: number;
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
    let descriptionText = 'No value';
    if (element.length > 0) {
        descriptionText = `Element contains ${element.length} element(s)`;
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there'));

function extractAndConvert<T extends object, U extends keyof T> (obja: T, key: U) {
    return obja[key];
}

console.log(extractAndConvert({ name: 'test' }, 'name'));

class DataStorage<T extends string | number | object> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStore = new DataStorage<string>();
textStore.addItem('Data 1');
textStore.addItem('Data 2');
textStore.removeItem('Data 1');
console.log(textStore.getItems);

const numberStore = new DataStorage<number>();
numberStore.addItem(1);
numberStore.addItem(2);
numberStore.removeItem(1);
console.log(numberStore.getItems);

const objectStore = new DataStorage<object>();
const maxObj = { name: 'Max' };
objectStore.addItem(maxObj);
objectStore.addItem({ name: 'Jim' });
objectStore.removeItem(maxObj);
console.log(objectStore.getItems);

interface CourseGoal {
    title: string;
    description: string;
    startDate: Date;
}

function createGoal(title: string, description: string, startDate: Date): CourseGoal {
    let course: Partial<CourseGoal> = {}; // Partial makes properties optional
    course.title = title;
    course.description = description;
    course.startDate = startDate;

    return course as CourseGoal;
}

const names2: Readonly<string[]> = ['Max', 'Tim']; // Readonly restricts content
// names2.push('Jim');