const express = require("express")
const Router = express.Router()
const Movie = require("../model/movieModel")
const Genre = require("../model/genreModel")

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


//Reagan's Endpoint
Router.post("/movieGenres", async(req, res) => {
    const titleMovie = req.body.title;
    var myIds = new Array()

    const movieID= await Movie.find({title:titleMovie},{"tid":1})
    // console.log("new movie")
    // console.log(movieID)
    const arrID = await Array.from(movieID).forEach(function(myDoc){myIds.push(myDoc.tid)})
    const newTID= myIds[0]
    const genre = await Genre.find({tid:newTID}, {genre:1, tid:1})
    // console.log(genre);
    // console.log(myIds); 
    
    try{
        res.send(genre);
    }
    catch(e){
        res.status(500).send(e);
    }
});

//Riya's Endpoint
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

module.exports = Router;