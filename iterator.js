var { alice, bob, charlie } = require('./factory');

// Iterator
var agg = (function () {
    var index = 0,
        data = [alice, bob, charlie];

    return {
        next: function () {
            if (!this.hasNext()) {
                return null;
            }

            return data[index++];
        },
        hasNext: function () {
            return index < data.length;
        }
    };
}());

module.exports = agg;
