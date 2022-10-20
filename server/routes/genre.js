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
    console.log("hi")
    console.log(titleGenre)
 
    const genres = await Genre.find({genre:titleGenre}, {tid:1})

    var ids = new Array()

    Array.from(genres).forEach(function(test){ids.push(test.tid)})

    const movies= await Movie.find({tid:{$in:ids}}).sort({year:-1}).limit(10)

    try{
        res.send(movies);
    }
    catch(e){
        res.status(500).send(e);
    }
});

Router.get("/genre", (req, res) => {
    res.send("genres");
});

module.exports = Router;