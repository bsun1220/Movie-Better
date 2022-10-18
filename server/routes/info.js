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

module.exports = Router;