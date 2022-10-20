const express = require("express")
const Router = express.Router()
const Movie = require("../model/movieModel")

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


module.exports = Router;