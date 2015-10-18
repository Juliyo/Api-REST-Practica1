//File: routes/tvshows.js
module.exports = function (app) {
    
    var Lecturas = require('../models/lecturas.js');
    
    //GET - Return all tvshows in the DB
    findAllLecturas = function (req, res) {
        Lecturas.find(function (err, lecturas) {
            if (!err) {
                console.log('GET /lecturas')
                /*for (var i in lecturas) {
                    lecturas[i]._id = undefined;
                }*/
                res.send(lecturas);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };
    
    //GET - Return a TVShow with specified ID
    findById = function (req, res) {
        Lecturas.find({identificadorLector: req.params.id}, function (err, lectura) {
            if (!err) {
                console.log('GET /lecturas/' + req.params.id);
                res.send(lectura);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };
    
    //POST - Insert a new TVShow in the DB
    addLectura = function (req, res) {
        console.log('POST');
        console.log(req.body);
        
        var lectura = new Lecturas({
            _id: req.body.identificadorIndividuo,
            identificadorIndividuo: req.body.identificadorIndividuo,
            identificadorLector: req.body.identificadorLector,
            fechaHora: req.body.fechaHora,
            latitud: req.body.latitud,
            longitud: req.body.longitud
        });
        
        lectura.save(function (err) {
            if (!err) {
                res.send(lectura);
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
                res.send('ERROR: ' + err);
            }
        });
        
        
    };
    
    //PUT - Update a register already exists
    updateLectura = function (req, res) {
        Lecturas.findById(req.params.id, function (err, lectura) {
            //lectura._id = req.body.identificadorLector;
            lectura.identificadorIndividuo = req.body.identificadorIndividuo;
            lectura.identificadorLector = req.body.identificadorLector;
            lectura.fechaHora = req.body.fechaHora;
            lectura.latitud = req.body.latitud;
            lectura.longitud = req.body.longitud;
            
            lectura.save(function (err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(lectura);
            });
        });
    }
    
    //DELETE - Delete a TVShow with specified ID
    deleteLectura = function (req, res) {
        Lecturas.findById(req.params.id, function (err, lectura) {
            lectura.remove(function (err) {
                if (!err) {
                    console.log('Removed');
                    res.status(200).send();
                } else {
                    console.log('ERROR: ' + err);
                    res.status(500).send();
                }
            })
        });
    }
    
    //Link routes and functions
    app.get('/lecturas', findAllLecturas);
    app.get('/lecturas/:id', findById);
    app.post('/lecturas', addLectura);
    app.put('/lecturas/:id', updateLectura);
    app.delete('/lecturas/:id', deleteLectura);

}