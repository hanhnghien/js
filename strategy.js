// Strategy
var validator = {
    types: {
        isNumber: {
            validate: function (value) {
                return !isNaN(value);
            },
            message: ' is Number'
        }
    },
    config: {
        age: 'isNumber',
        kid: 'isNumber',
        car: 'isNumber',
        salary: 'isNumber'
    },
    validate: function (data) {
        this.messages = [];
        for (var property in data) {
            if (data.hasOwnProperty(property)) {
                var type = this.config[property];
                if (!type) {
                    continue;
                }
                var checker = this.types[type];
                if (!checker.validate(data[property])) {
                    this.messages.push(property + checker.message);
                }
            }
        }

        return this.hasErrors();
    },
    hasErrors: function () {
        return this.messages.length !== 0;
    }
};

module.exports = validator;
