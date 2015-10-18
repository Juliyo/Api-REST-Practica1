var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var estacionesSchema = new Schema({
    _id: Number,
    identificadorLector: { type: Number },
    latitud: { type: Number },
    longitud: { type: Number }
}, {
    versionKey: false
});

module.exports = mongoose.model('Estaciones', estacionesSchema);