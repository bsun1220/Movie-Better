const express = require("express");
const Router = express.Router();
const User = require("../model/userModel");

Router.get("/login", async(req, res) => {
    const user = await User.find({});
    res.send(user);
});

Router.put("/balance", async(req, res) => {
    const username = req.body.username;
    const amount = req.body.amount;
    User.find({username:username})
        .exec((err, user) => {
            if (err) return  res.status(400).send(err);
            user[0].balance = user[0].balance - amount;
            user[0].save();
            return res.send("Success")
        });
});

Router.put("/accountedit", async(req, res) => {
    const username = req.body.old_username;
    const new_user = req.body.username;
    const password = req.body.password;
    const first = req.body.first;
    const last = req.body.last; 

    User.find({username:username})
        .exec((err, user) => {
            if (err) return  res.status(400).send(err);
            user[0].username = new_user;
            user[0].password = password;
            user[0].firstname = first;
            user[0].lastname = last;
            user[0].save();
            return res.send("Success")
        });
});

Router.get("/login/:name", async(req, res) => {
    const name = req.params.name;
    const user = await User.find({"username":name});
    res.send(user);
});

Router.get("/login/:name/:password", async(req, res) => {
    const name = req.params.name;
    const password = req.params.password;
    const user = await User.find({"username":name, "password":password});
    res.send(user);
});

Router.put("/loginbet", async (req, res) => {
    const {username , password} = req.body;
    const count = await User.countDocuments({}).exec();
    const uid = "uid" + count;
    const object = {
        "username":username,
        "password":password,
        "uid":uid
    };

    const user = new User(object);
    try {
        await user.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }
});

module.exports = Router;