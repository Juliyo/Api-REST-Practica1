var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var lecturasSchema = new Schema({
    _id: Number,
    identificadorIndividuo: { type: Number },
    identificadorLector: { type: Number },
    fechaHora: { type: String },
    latitud: { type: Number },
    longitud: { type: Number }
}, {
    versionKey: false
});


module.exports = mongoose.model('Lecturas', lecturasSchema);