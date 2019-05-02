var agg = require('./iterator');
var validator = require('./strategy');
var { hanh, mediator } = require('./factory');

while (agg.hasNext()) {
    agg.next().calculate();
}

validator.validate(hanh);
if (!validator.hasErrors()) {
    hanh.calculate();
}
else {
    console.log(hanh.getSalary());
}

mediator.setup();
mediator.run();
