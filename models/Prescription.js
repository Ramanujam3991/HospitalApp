
var mongoose = require('mongoose');

var prescriptionSchema = new mongoose.Schema({
    patientName:{type: String},
    prescriptionDescription:{type: String},
    prescriptionPrice: {type: Number},
    prescriptionId: {type: Number}
});

mongoose.model('prescription', prescriptionSchema);