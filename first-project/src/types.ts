type Output = 'as-number' | 'as-text';

let unused: undefined;
let userInput: unknown;
// let addition: Function;
let addition: (a: number, b: number) => number;

const add = (n1: number, n2: number, output: Output = 'as-number') => {
    return n1 + n2;
}

addition = add;

console.log(addition(1, 5));

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    return cb(n1 + n2);
}

addAndHandle(1, 5, result => { console.log(result) });

enum Position {
    DEV,
    PO,
    SM
};

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string], // Tupple
    position: Position // ENUM
} = {
    name: 'Mike',
    age: 30,
    hobbies: ['Art', 'Movie'],
    role: [2, 'author'],
    position: Position.DEV
};

// console.log(person.nickname);

const generateError = (message: string, errorCode: number): never => {
    throw { message, errorCode }
}

generateError('Error', 500);