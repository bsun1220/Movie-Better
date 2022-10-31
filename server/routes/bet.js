const express = require("express");
const Router = express.Router();
const Bet = require("../model/betModel");

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

module.exports = Router;