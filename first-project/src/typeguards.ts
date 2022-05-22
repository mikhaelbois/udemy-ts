type Admin = {
    name: string,
    privileges: string[]
}

type Employee = {
    name: string,
    startDate: Date
}

// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
    name: 'Mark',
    privileges: [],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Intersected at number

// Function overloads
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: string, b: string): string; 
function add2(a: number, b: number): number;
function add2(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    return a + b;
};

const result2 = add2('Test 1', 'Test 3');
result2.split(' ');

// const result3 = {
//     name: 'Josh'
// };
// console.log(result3?.title);

const result4 = '';
console.log(result4 ?? 'Default'); // Check if nullish or undefined

interface Horse {
    type: 'horse',
    name: string
}

interface Bird {
    type: 'bird',
    name: string
}

// Type guards
// typeof emp1.name === 'string'
// 'privileges' in emp1
// emp1 instanceof Employee
// test.type === 'bird'

// const userInput2 = <HTMLInputElement>document.getElementById('user-input')!;
const userInput2 = document.getElementById('user-input')! as HTMLInputElement; // In React

userInput2.value = 'Test';

interface ErrorContainer {
    // id: string;
    [ prop: string ]: string;
}

const errorBag: ErrorContainer = {
    email: 'Error message email',
    username: 'Error message username',
    // test: 20
};