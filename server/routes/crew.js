const express = require("express")
const Router = express.Router()
const Crew = require("../model/crewModel")

//These are routes related to the movie crews
Router.put("/crew", async(req, res) => {
    const crew = new Crew(req.body);
    try {
        await crew.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }

});

module.exports = Router;