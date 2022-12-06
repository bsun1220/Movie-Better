const express = require("express")
const Router = express.Router()
const Movie = require("../model/movieModel")
const Genre = require("../model/genreModel")

//Routes relating to our past-present movies
Router.put("/movie", async(req, res) => {
    const movie = new Movie(req.body);
    try {
        await movie.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }

});

Router.post("/movie", async(req, res) => {
    const titleMovie = req.body.title;
    const movie = await Movie.find({title:titleMovie})
    try{
        res.send(movie);
    }
    catch(e){
        res.status(500).send(e);
    }
});


//Reagan's Endpoint, finding the genres of a given movie title
Router.post("/movieGenres", async(req, res) => {
    
    const titleMovie = req.body.title;
    var myIds = new Array()

    const movieID= await Movie.find({title:titleMovie},{"tid":1})
    const arrID = await Array.from(movieID).forEach(function(myDoc){myIds.push(myDoc.tid)})
    const newTID= myIds[0]
    const genre = await Genre.find({tid:newTID}, {genre:1, tid:1})
    try{
        res.send(genre);
    }
    catch(e){
        res.status(500).send(e);
    }
});

//Riya's Endpoint, find movies of a given rating
Router.post("/rating", async(req, res) => {
    const ratingMovie = req.body.rating;
    const rating = await Movie.find({rating:ratingMovie})
    try{
        res.send(rating);
    }
    catch(e){
        res.status(500).send(e);
    }
});

//Bharat's Endpoint, find movies using a start and end year parameter
Router.post("/time", async(req, res) => {
    const startYear = req.body.startYear;
    const endYear = req.body.endYear;
    const yearMovies = await Movie.find({year:{$gte: startYear, $lte: endYear}}).sort({rating:-1})
    try{
        res.send(yearMovies.slice(0,10));
    }
    catch(e){
        res.status(500).send(e);
    }
});

//Hugh's Endpoint, finding movies of a given min and max duration parameter
Router.post("/length", async(req, res) => {
    const minimumDuration = req.body.minimumDuration;
    const maximumDuration = req.body.maximumDuration;
    const durationMovies = await Movie.find({length:{$gte: minimumDuration, $lte: maximumDuration}}).sort({rating:-1})
    try{
        res.send(durationMovies.slice(0,10));
    }
    catch(e){
        res.status(500).send(e);
    }
});

module.exports = Router;