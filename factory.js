var Employees = require('./decorator');

// Factory
Employees.prototype.calculate = function () {
    this.decoratorsList = [];
    if (this.age > 50) {
        this.decoratorsList.push('addSalary');
    }
    if (this.car > 0) {
        this.decoratorsList.push('useCar');
    }
    if (this.kid > 2) {
        this.decoratorsList.push('decreaseTax');
    }
    else {
        this.decoratorsList.push('countryTax');
    }
    mediator.log(this.name, this.decoratorsList, this.getSalary());
};
Employees.factory = function (employee) {
    Employees[employee].prototype = new Employees();

    return new Employees[employee]();
};
Employees.Alice = function () {
    this.name = 'Alice';
    this.age = 26;
    this.kid = 2;
    this.car = 0;
    this.salary = 6000;
};
Employees.Bob = function () {
    this.name = 'Bob';
    this.age = 52;
    this.kid = 0;
    this.car = 1;
    this.salary = 4000;
};
Employees.Charlie = function () {
    this.name = 'Charlie';
    this.age = 36;
    this.kid = 3;
    this.car = 1;
    this.salary = 5000;
};
var hanh = new Employees();
hanh.name = "Hanh";
hanh.age = 35;
hanh.kid = 2;
hanh.car = undefined;
hanh.salary = 4000;

// Mediator
var mediator = {
    employees: {},
    setup: function () {
        this.employees.hanh = hanh;
    },
    log: function (name, decoratorsList, salary) {
        console.log(name, decoratorsList, salary);
    },
    run: function () {
        mediator.employees.hanh.calculate();
    }
};

module.exports = {
    Employees,
    alice: Employees.factory('Alice'),
    bob: Employees.factory('Bob'),
    charlie: Employees.factory('Charlie'),
    hanh,
    mediator,
};
