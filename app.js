var env = process.env.NODE_ENV || 'development',
    config = require('./config')[env],
    mongoose = require('mongoose')

var connect = function () {
    //var options = { server: { socketOptions: { keepAlive: 1 } } }
    mongoose.connect(config.db)
}
connect()

mongoose.connection.on('error', function (err) {
    console.log(err)
})

mongoose.connection.on('disconnected', function () {
    connect()
})

var express = require('express')
app = express()

require('./routes')

var port = process.env.PORT || 5000;
app.listen(port);
console.log("Running on port " + port);

module.exports = app
