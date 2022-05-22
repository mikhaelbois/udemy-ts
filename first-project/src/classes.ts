abstract class Department {
    // private name: string;
    protected employees: string[] = [];

    static companyName = 'Google';

    constructor(
        protected readonly id: string,
        // n: string
        private name: string
    ) {
        // this.name = n;
    }

    abstract describe(): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        return this.employees;
    }

    static createEmployee(name: string) {
        return { name };
    }
}

// const dep1 = new Department('1', 'dep1');
// dep1.addEmployee('Mark');

// dep1.employees[2] = 'Jim'; // Won't work because it's private

// console.log(dep1);

const employee1 = Department.createEmployee('Steve');

console.log(employee1);
console.log(Department.companyName);

class ITDepartment extends Department {
    constructor(
        protected readonly id: string,
        private admins: string[] = []
    ) {
        super(id, 'IT');
    }

    describe() {
        return 'Description IT';
    }

    addEmployee(employee: string) {
        this.employees.push(employee + ' IT');
    }

    get adminList() {
        return this.admins;
    }

    set addAdmin(name: string) {
        this.admins.push(name);
    }
}

const itdep1 = new ITDepartment('1');
itdep1.addEmployee('Mark');
itdep1.addAdmin = 'Anna';

console.log(itdep1);
console.log(itdep1.adminList);

// Singleton pattern
class App {
    private static instance:App;

    private constructor() {

    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new App();

        return this.instance;
    }
}

// const app = new App();
const app = App.getInstance();
const app2 = App.getInstance();

console.log(app === app2);

