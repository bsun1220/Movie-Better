const express = require("express")
const Router = express.Router()
const Famous = require("../model/famousModel")

//Routes related to the famous movies of a given crew members
Router.put("/famous", async(req, res) => {
    const famous = new Famous(req.body);
    try {
        await famous.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }

});

module.exports = Router;