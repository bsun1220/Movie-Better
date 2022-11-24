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

Router.put("/editlikes/:username/:content", async(req, res) => {
    const username = req.params.username;
    const content = req.params.content;
    const com = await Comment.findOneAndUpdate({"username":username, "content":content},{ $inc: { "likes" : 1} })
    console.log("hi")
    await com.save();
    res.send(com);
});
Router.put("/editdislikes/:username/:content", async(req, res) => {
    const username = req.params.username;
    const content = req.params.content;
    const com = await Comment.findOneAndUpdate({"username":username, "content":content},{ $inc: { "likes" : -1} })
    console.log(com)
    await com.save();

 
    res.send(com);
});

module.exports = Router;
