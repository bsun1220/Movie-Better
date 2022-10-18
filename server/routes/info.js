const express = require("express")
const Router = express.Router()
const Info = require("../model/infoModel")

Router.put("/info", async(req, res) => {
    const info = new Info(req.body);
    try {
        await info.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }

});

Router.post("/info", async(req, res) => {
    const actorName = req.body.name;
    const actorID = await Info.find({name:actorName})
    console.log(actorName)
    console.log(actorID)
    try{
        res.send(actorID);
    }
    catch(e){
        res.status(500).send(e);
    }
});

module.exports = Router;