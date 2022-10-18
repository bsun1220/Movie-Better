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

module.exports = Router;