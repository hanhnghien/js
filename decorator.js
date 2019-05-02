var Employees = require('./singleton');

// Decorator
Employees.decorators = {};
Employees.decorators.countryTax = {
    getSalary: function (salary) {
        salary -= 0.20 * salary;

        return salary;
    }
};
Employees.decorators.addSalary = {
    getSalary: function (salary) {
        salary += 0.07 * salary;

        return salary;
    }
};
Employees.decorators.decreaseTax = {
    getSalary: function (salary) {
        salary -= 0.18 * salary;

        return salary;
    }
};
Employees.decorators.useCar = {
    getSalary: function (salary) {
        salary -= 500;

        return salary;
    }
};
Employees.prototype.getSalary = function () {
    var salary = this.salary;
    for (var i = 0; i < this.decoratorsList.length; i++) {
        salary = Employees.decorators[this.decoratorsList[i]].getSalary(salary);
    }

    return salary;
};

module.exports = Employees;
