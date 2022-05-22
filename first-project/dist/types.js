"use strict";
let unused;
let userInput;
// let addition: Function;
let addition;
const add = (n1, n2, output = 'as-number') => {
    return n1 + n2;
};
addition = add;
console.log(addition(1, 5));
const addAndHandle = (n1, n2, cb) => {
    return cb(n1 + n2);
};
addAndHandle(1, 5, result => { console.log(result); });
var Position;
(function (Position) {
    Position[Position["DEV"] = 0] = "DEV";
    Position[Position["PO"] = 1] = "PO";
    Position[Position["SM"] = 2] = "SM";
})(Position || (Position = {}));
;
const person = {
    name: 'Mike',
    age: 30,
    hobbies: ['Art', 'Movie'],
    role: [2, 'author'],
    position: Position.DEV
};
// console.log(person.nickname);
const generateError = (message, errorCode) => {
    throw { message, errorCode };
};
generateError('Error', 500);
