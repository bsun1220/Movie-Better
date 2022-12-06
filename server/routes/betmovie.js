const express = require("express")
const Router = express.Router()
const BetMovie = require("../model/betMovieModel")


//These are routes for anything relating to our 2023/future movies that users will bet on, such as
//getting a bet movie by its id or by its title

Router.put("/betmovie", async(req, res) => {
    const bet = new BetMovie(req.body);
    try {
        await bet.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }

});

Router.get("/betmovieid/:id", async(req, res) => {
    const id = req.params.id;
    const movie = await BetMovie.find({"nmid":id});
    res.send(movie);
});


Router.get("/betmovieid", async(req, res) => {
    const movie = await BetMovie.find({});
    res.send(movie);
});

Router.get("/betmovietitle/:title", async(req, res) => {
    const id = req.params.title;
    const movie = await BetMovie.find({"title":id});
    res.send(movie);
});


module.exports = Router;