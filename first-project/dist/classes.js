"use strict";
class Department {
    constructor(id, 
    // n: string
    name) {
        this.id = id;
        this.name = name;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        return this.employees;
    }
    static createEmployee(name) {
        return { name };
    }
}
Department.companyName = 'Google';
// const dep1 = new Department('1', 'dep1');
// dep1.addEmployee('Mark');
// dep1.employees[2] = 'Jim'; // Won't work because it's private
// console.log(dep1);
const employee1 = Department.createEmployee('Steve');
console.log(employee1);
console.log(Department.companyName);
class ITDepartment extends Department {
    constructor(id, admins = []) {
        super(id, 'IT');
        this.id = id;
        this.admins = admins;
    }
    describe() {
        return 'Description IT';
    }
    addEmployee(employee) {
        this.employees.push(employee + ' IT');
    }
    get adminList() {
        return this.admins;
    }
    set addAdmin(name) {
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
    constructor() {
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
