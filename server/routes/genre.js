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

Router.get("/genre/:id", async(req, res) => {
    const id = req.params.id;
    const genres = await Genre.find({genre:id});
    const list = [];
    genres.forEach((data) => {
        list.push(data.tid)
    })
    const movies = await Movie.find({tid:{$in:list}}).sort({rating:-1});

    let total = 0;
    movies.forEach((data) => total += data.rating);
    const avg = Math.round(total / movies.length * 100) / 100;

    let square_err = 0;
    movies.forEach((data) => square_err += Math.pow(data.rating - avg, 2))
    const std = Math.round(Math.pow(square_err / movies.length, 0.5) * 100) / 100;

    console.log(avg);
    console.log(std);

    const val = movies.slice(0, 5)
    console.log(val.map(x => x));

    res.send(movies);
});


Router.post("/mygenre", async(req, res) => {
    const titleGenre = req.body.genre;
 
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

module.exports = Router;