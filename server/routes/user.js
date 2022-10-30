const express = require("express");
const Router = express.Router();
const User = require("../model/userModel");

Router.get("/login", async(req, res) => {
    const user = await User.find({});
    res.send(user);
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