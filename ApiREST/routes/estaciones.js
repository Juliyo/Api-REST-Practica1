//File: routes/tvshows.js
module.exports = function (app) {
    
    var Estaciones = require('../models/estaciones.js');
    
    //GET - Return all tvshows in the DB
    findAllEstaciones = function (req, res) {
        Estaciones.find(function (err, estaciones) {
            if (!err) {
                console.log('GET /estaciones')
                /*for(var i in estaciones) {
                    estaciones[i]._id = undefined;
                    console.log("hola");
                    }*/
                res.send(estaciones);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };
    
    //GET - Return a TVShow with specified ID
    findById = function (req, res) {
        Estaciones.findById(req.params.id, function (err, estacion) {
            if (!err) {
                console.log('GET /estaciones/' + req.params.id);
                res.send(estacion);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };
    
    //POST - Insert a new TVShow in the DB
    addEstacion = function (req, res) {
        console.log('POST');
        console.log(req.body);
        
        var estacion = new Estaciones({
            _id: req.body.identificadorLector,
            identificadorLector: req.body.identificadorLector,
            latitud: req.body.latitud,
            longitud: req.body.longitud
        });
        
        estacion.save(function (err) {
            if (!err) {
                res.send(estacion);
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
                res.send('ERROR: ' + err);
            }
        });
        
        
    };
    
    //PUT - Update a register already exists
    updateEstacion = function (req, res) {
        Estaciones.findById(req.params.id, function (err, estacion) {
            //estacion._id = req.body.identificadorLector;
            estacion.identificadorLector = req.body.identificadorLector;
            estacion.latitud = req.body.latitud;
            estacion.longitud = req.body.longitud;
            
            estacion.save(function (err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(estacion);
            });
        });
    }
    
    //DELETE - Delete a TVShow with specified ID
    deleteEstacion = function (req, res) {
        Estaciones.findById(req.params.id, function (err, estacion) {
            estacion.remove(function (err) {
                if (!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    }
    
    //Link routes and functions
    app.get('/estaciones', findAllEstaciones);
    app.get('/estaciones/:id', findById);
    app.post('/estaciones', addEstacion);
    app.put('/estaciones/:id', updateEstacion);
    app.delete('/estaciones/:id', deleteEstacion);

}