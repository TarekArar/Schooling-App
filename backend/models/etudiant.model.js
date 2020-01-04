var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var etudiantSchema = new Schema({
  nom: { type: String, required: true, },
  prenom: { type: String, required: true, },
  matricule: { type: Number, required: true },
  dateNissance: { type: Date, required: true, },
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', etudiantSchema);

module.exports = Exercise;