// Singleton
var Employees;
(function () {
    var instance;
    Employees = function Employees() {
        if (instance) {
            return instance;
        }
        instance = this;
        this.name = '';
        this.age = 0;
        this.kid = 0;
        this.car = 0;
        this.salary = 0;
        this.decoratorsList = [];
    };
}());

module.exports = Employees;
