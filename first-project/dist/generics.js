"use strict";
const names = ['Max', 'Tim']; // string[]
const promise = new Promise((resolve, reject) => {
    resolve('Finished');
});
// promise.then(data => data.split(' '));
// const merge: <T extends object, U extends object> = (obja: T, objb: U) => { // Won't work..
// function merge<T, U> (obja: T, objb: U) {
function merge(obja, objb) {
    return Object.assign(Object.assign({}, obja), objb);
}
const obj1 = {
    name: 'Test 1',
    age: 30
};
const obj2 = {
    title: 'Test 2'
};
const result = merge(obj1, obj2);
console.log(result.age);
function countAndDescribe(element) {
    let descriptionText = 'No value';
    if (element.length > 0) {
        descriptionText = `Element contains ${element.length} element(s)`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there'));
function extractAndConvert(obja, key) {
    return obja[key];
}
console.log(extractAndConvert({ name: 'test' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStore = new DataStorage();
textStore.addItem('Data 1');
textStore.addItem('Data 2');
textStore.removeItem('Data 1');
console.log(textStore.getItems);
const numberStore = new DataStorage();
numberStore.addItem(1);
numberStore.addItem(2);
numberStore.removeItem(1);
console.log(numberStore.getItems);
const objectStore = new DataStorage();
const maxObj = { name: 'Max' };
objectStore.addItem(maxObj);
objectStore.addItem({ name: 'Jim' });
objectStore.removeItem(maxObj);
console.log(objectStore.getItems);
function createGoal(title, description, startDate) {
    let course = {}; // Partial makes properties optional
    course.title = title;
    course.description = description;
    course.startDate = startDate;
    return course;
}
const names2 = ['Max', 'Tim']; // Readonly restricts content
// names2.push('Jim');
