const express = require("express");
const Router = express.Router();
const Bet = require("../model/betModel");
const User = require("../model/userModel");

Router.get("/getbet", async(req, res) => {
    const amount = await Bet.find({});
    res.send(amount);
});

Router.get("/getbet/:uid/:nmid/:rating", async(req, res) => {
    const uid = req.params.uid;
    const nmid = req.params.nmid;
    const rating = parseFloat(req.params.rating);
    const amount = await Bet.find({"uid":uid, "nmid":nmid, "rating":rating});
    res.send(amount);
});

Router.get("/getbetuid/:uid", async(req, res) => {
    const uid = req.params.uid;
    const amount = await Bet.find({"uid":uid});
    res.send(amount);
});

Router.get("/getbetnmid/:nmid", async(req, res) => {
    const nmid = req.params.nmid;
    const amount = await Bet.find({"nmid":nmid});
    res.send(amount);
});


Router.put("/setbet", async(req, res) => {
    const amount = new Bet(req.body);
    try {
        await amount.save();
        res.send("Success");
    }
    catch(error){
        res.status(500).send(error);
    }
});

Router.put("/editbet/:uid/:nmid/:rating/:amount", async(req, res) => {
    const uid = req.params.uid;
    const nmid = req.params.nmid;
    const rating = parseFloat(req.params.rating);
    const amount = parseFloat(req.params.amount);

    const bet = await Bet.find({"uid":uid, "nmid":nmid, "rating":rating})
    bet[0].amount += amount;
    await bet[0].save();

    const user = await User.find({"uid":uid});
    user[0].balance -= amount;
    await user[0].save();
    res.send(user)[0];
});

module.exports = Router;