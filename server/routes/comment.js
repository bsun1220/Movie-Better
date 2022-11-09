const express = require("express");
const Router = express.Router();
const Comment = require("../model/commentModel");

Router.put("/comment", async(req, res) => {
    const bet = new Comment(req.body);
    console.log(req.body);
    try {
        await bet.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }
});


Router.get("/comment", async(req, res) => {
    const comments = await Comment.find({}).sort({"Date":-1}).limit(10);
    res.send(comments);
});

module.exports = Router;
