const express = require("express")
const Router = express.Router()
const Info = require("../model/infoModel")
const Famous = require("../model/famousModel")
const Movie = require("../model/movieModel")
const Crew = require("../model/crewModel")

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
    const actorID = await Info.find({name:actorName}, {uid:1})
    var id = new Array()
    Array.from(actorID).forEach(function(test){id.push(test.uid)})
    const famous = await Famous.find({uid:id[0]})
    var tids = new Array()
    Array.from(famous).forEach(function(test2){tids.push(test2.tid)})
    const ans = await Movie.find({tid: {$in:tids}})
    
    try{
        res.send(ans);
    }
    catch(e){
        res.status(500).send(e);
    }
});

//actor recent movies

Router.post("/infoRecent", async(req, res) => {
    const actorName = req.body.name;
    const actorID = await Info.find({name:actorName}, {uid:1})
    var id = new Array()
    Array.from(actorID).forEach(function(test){id.push(test.uid)})
    const famous = await Crew.find({uid:id[0], category: {$in:[/^acto/,/^actr/]}},{tid:1})
    var tids = new Array()
    Array.from(famous).forEach(function(test2){tids.push(test2.tid)})
    const ans = await Movie.find({tid: {$in:tids}}).sort({year:-1}).limit(10);
    
    try{
        res.send(ans);
    }
    catch(e){
        res.status(500).send(e);
    }
});

module.exports = Router;