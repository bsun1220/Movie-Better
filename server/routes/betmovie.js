const express = require("express")
const Router = express.Router()
const BetMovie = require("../model/betMovieModel")

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

Router.get("/betmovietitle/:title", async(req, res) => {
    const id = req.params.title;
    const movie = await BetMovie.find({"title":id});
    res.send(movie);
});


module.exports = Router;