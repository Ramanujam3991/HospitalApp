var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

require('./models/moviemodel');
require('./models/Prescription');


mongoose.connect('mongodb://localhost:27017/myStudents',{useUnifiedTopology:true}, {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("We are connected on mongoose!");
});

var movieController = require('./controllers/moviecontroller.js');
var prescriptionController = require('./controllers/PrescriptionController.js');

app.post('/prescription/add', prescriptionController.Create);
app.get('/add', function(req,res){
    res.render('addPrescription.ejs');
});
app.get('/prescriptions',prescriptionController.GetAll);
app.get('/prescription/findbyname', prescriptionController.GetByName);
app.get('/prescription/findbyid', prescriptionController.GetById);



app.get('/movies',movieController.GetAll);

app.get('/movies/findbyname', movieController.GetByName);
app.get('/movies/findbyyear', movieController.GetByYear);
app.post('/movie/add', movieController.Create);
app.get('/add', function(req,res){
    res.render('addmovie.ejs');
});
app.listen('3000');