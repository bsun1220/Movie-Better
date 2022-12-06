const express = require("express");
const Router = express.Router();
const Comment = require("../model/commentModel");

//These are routes related to users' comments
//Such as editing the likes and dislikes of a given comment

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

Router.get("/comment/:_id/:content", async(req, res) => {


    const content = req.params.content;
    console.log(content)
    const id = req.params._id
    console.log(id)
    const comments = await Comment.find({"_id":id});
    console.log(comments)
    var myLikes = new Array()
    const likeID =  Array.from(comments).forEach(function(myDoc){myLikes.push(myDoc.likes)})
    const myLike= myLikes[0]
    res.send(myLike.toString());
});

Router.put("/editlikes/:username/:content", async(req, res) => {
    const username = req.params.username;
    const content = req.params.content;
    const com = await Comment.findOneAndUpdate({"username":username, "content":content},{ $inc: { "likes" : 1} })
    await com.save();
    res.send(com);
});
Router.put("/editdislikes/:username/:content", async(req, res) => {
    const username = req.params.username;
    const content = req.params.content;
    const com = await Comment.findOneAndUpdate({"username":username, "content":content},{ $inc: { "likes" : -1} })
    await com.save();

 
    res.send(com);
});

module.exports = Router;
