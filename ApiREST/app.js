var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.get('/', function (req, res) {
    res.send("Hello world!");
});

routes1 = require('./routes/estaciones.js')(app);
routes2 = require('./routes/lecturas.js')(app);

mongoose.connect('mongodb://localhost/practica1', function (err, res) {
    if (err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});

server.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});