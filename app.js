var express = require('express')
app = express()

require('./routes')

var port = process.env.PORT || 5000;
app.listen(port);
console.log("Running on port " + port);

module.exports = app
