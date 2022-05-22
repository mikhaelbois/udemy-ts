"use strict";
const emp1 = {
    name: 'Mark',
    privileges: [],
    startDate: new Date()
};
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
;
const result2 = add2('Test 1', 'Test 3');
result2.split(' ');
// const result3 = {
//     name: 'Josh'
// };
// console.log(result3?.title);
const result4 = '';
console.log(result4 !== null && result4 !== void 0 ? result4 : 'Default'); // Check if nullish or undefined
// Type guards
// typeof emp1.name === 'string'
// 'privileges' in emp1
// emp1 instanceof Employee
// test.type === 'bird'
// const userInput2 = <HTMLInputElement>document.getElementById('user-input')!;
const userInput2 = document.getElementById('user-input'); // In React
userInput2.value = 'Test';
const errorBag = {
    email: 'Error message email',
    username: 'Error message username',
    // test: 20
};
