const express = require("express")
const Router = express.Router()
const Genre = require("../model/genreModel")

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

Router.get("/genre", (req, res) => {
    res.send("genres");
});

module.exports = Router;