var mongoose = require('mongoose'), Movie = mongoose.model('movie');

module.exports ={
GetAll: function(req,res){
    console.log(" Print all the movies");
    Movie.find({}, function(err, results){
        if(err) throw err;
        res.render('movielist.ejs', {allthemovies:results});
         });
    },
    GetByName: function(req,res){
        console.log("List of movie names");
        const {name} = req.query;
        Movie.find({name}, function(err, results){
            if(err) throw err;
            res.render('movielist.ejs', {allthemovies:results});
        });
    },
    GetByYear:function(req,res){
        console.log("List of the movies by Year");
        var year = req.query.year;
        Movie.find({'year_released':{$gte:year}}, function(err, results){
            if(err) throw err;
            res.render('movielist.ejs', {allthemovies:results});
        });

    },
    Create: function(req,res){
        console.log("Adding a movie here...");
        var movieinfo = req.body;
        movieinfo={
            "name" : req.body.name,
            "director" : req.body.director,
            "year_released":req.body.year_released
        }
        Movie.create(movieinfo,function(err,result){
            if(err) throw err;
            res.redirect('/movies');
        });
    }
}
