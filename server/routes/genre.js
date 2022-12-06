const express = require("express")
const Router = express.Router()
const Genre = require("../model/genreModel")
const Movie = require("../model/movieModel") 


// Routes related to the genre of a given movie
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
//Gets general genre analytics of a movie by its id
Router.get("/genre/:id", async(req, res) => {
    const id = req.params.id;
    const genres = await Genre.find({genre:id});
    const list = [];
    genres.forEach((data) => {
        list.push(data.tid)
    })
    const movies = await Movie.find({tid:{$in:list}}).sort({rating:-1});

    if (movies.length === 0){
        res.send(movies);
        return;
    }

    const median = movies[Math.round(movies.length/2)].rating;
    const max = movies[0].rating;
    const min = movies[movies.length - 1].rating;

    let total = 0;
    movies.forEach((data) => total += data.rating);
    const avg = Math.round(total / movies.length * 100) / 100;

    let square_err = 0;
    movies.forEach((data) => square_err += Math.pow(data.rating - avg, 2))
    const std = Math.round(Math.pow(square_err / movies.length, 0.5) * 100) / 100;

    const top_five = movies.slice(0, 5)
    const popular = top_five.map(x => [x["title"], x["rating"]]);

    const time_data = []
    movies.forEach((data) => {
        time_data.push({"year":data.year, "rating":data.rating})
    })

    time_data.sort((a,b) => a.year - b.year);

    const rating_data = []
    time_data.forEach((data) => {
        rating_data.push([data.rating]);
    });

    const expanding_mean = [];
    expanding_mean.push([1, rating_data[0][0]])
    for (let i = 1;  i < rating_data.length; i++){
        const n = expanding_mean.length;
        const new_mean = (n * expanding_mean[i - 1][1] + rating_data[i][0])/(n + 1);
        expanding_mean.push([i + 1, new_mean]);
    }

    const final_data = {"min":min, "median":median,
        "max":max,"mean":avg,"std":std,
        "expanding_mean":expanding_mean,
        "rating_data":rating_data,
        "popular":popular};

    res.send(final_data);
});

//Get the movies of a given genre
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