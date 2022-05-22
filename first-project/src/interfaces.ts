// type Person = {
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 30,
    greet: phrase => console.log(phrase)
}

interface Named {
    readonly name: string;
    output?: string; // Optional
    hasName?(): void; // Optional
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Human implements Greetable {
    constructor(
        public name: string,
        public age?: number // Optional
    ) {
        
    }

    greet() {
        return 'Hello World';
    }
}

const user2 = new Human('James');

interface AddFn {
    (a: number, b: number): number
}

let addFn: AddFn;

addFn = (n1: number, n2: number) => {
    return n1 + n2;
};