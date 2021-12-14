var mongoose = require('mongoose'), Prescription = mongoose.model('prescription');

module.exports ={
GetAll: function(req,res){
    console.log(" Print all the Prescriptions");
    Prescription.find({}, function(err, results){
        if(err) throw err;
        res.render('prescriptionlist.ejs', {alltheprescriptions:results});
         });
    },
    GetByName: function(req,res){
        const {patientName} = req.query;
        console.log('patientName'+patientName)
        Prescription.find({'patientName':patientName}, function(err, results){
            if(err) throw err;
            res.render('prescriptionlist.ejs', {alltheprescriptions:results});
        });
    },
    GetById:function(req,res){
        var prescriptionId = req.query.prescriptionId;
        Prescription.find({'prescriptionId':prescriptionId}, function(err, results){
            if(err) throw err;
            res.render('prescriptionlist.ejs', {alltheprescriptions:results});
        });

    },
    Create: function(req,res){
        var prescriptioninfo = req.body;
        prescriptioninfo={
            "patientName" : req.body.patientName,
            "prescriptionDescription" : req.body.prescriptionDescription,
            "prescriptionPrice" : req.body.prescriptionPrice,
            "prescriptionId":req.body.prescriptionId

        }
        Prescription.create(prescriptioninfo,function(err,result){
            if(err) throw err;
            res.redirect('/prescriptions');
        });
    }
}

