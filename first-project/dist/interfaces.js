"use strict";
let user1;
user1 = {
    name: 'Max',
    age: 30,
    greet: phrase => console.log(phrase)
};
class Human {
    constructor(name, age // Optional
    ) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return 'Hello World';
    }
}
const user2 = new Human('James');
let addFn;
addFn = (n1, n2) => {
    return n1 + n2;
};
