const express = require("express")
const Router = express.Router()
const Genre = require("../model/genreModel")
const Movie = require("../model/movieModel") 

Router.post("/genre", async(req, res) => {
    const genre = new Genre(req.body);
    try {
        await genre.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }

});


Router.post("/mygenre", async(req, res) => {
    const titleGenre = req.body.genre;
    const genres = await Movie.find({genre:titleGenre})
    console.log(genres);
    try{
        res.send(genres);
    }
    catch(e){
        res.status(500).send(e);
    }
});

Router.get("/genre", (req, res) => {
    res.send("genres");
});

module.exports = Router;