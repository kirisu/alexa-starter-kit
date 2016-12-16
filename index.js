var App = require('./src/index');

exports.handler = function (event, context) {
    var app = new App();
    app.execute(event, context);
};
