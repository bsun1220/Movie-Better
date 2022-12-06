const express = require("express")
const Router = express.Router()
const Info = require("../model/infoModel")
const Famous = require("../model/famousModel")
const Movie = require("../model/movieModel")
const Crew = require("../model/crewModel")

//Routes relating to the information of crewmembers
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

//Gets general anayltics (min, median, max, etc) of a crew member given their name
Router.get("/crew/:name", async(req,res)=>{
    const id = req.params.name;
    const director_info = await Info.find({name:id}).limit(1);
    if (director_info.length === 0 || director_info === null){
        res.send([]);
        return;
    }
    const director_id = director_info[0]["uid"];
    const crew = await Crew.find({uid:director_id});

    const movie_list = []
    for (let i = 0; i < crew.length; i++){
        const data = crew[i];
        const tid = data["tid"];
        const request = await Movie.find({tid:tid});
        const element = request[0];
        if (element !== undefined){
            movie_list.push(element);
        }
    }

    if(movie_list.length === 0){
        res.send(movie_list);
    }

    movie_list.sort((a, b) => b.rating - a.rating);

    const min = movie_list[movie_list.length - 1]["rating"];
    const median = movie_list[Math.round((movie_list.length - 1)/2)]["rating"];
    const max = movie_list[0]["rating"];

    let total = 0;
    movie_list.forEach((data) => {total += data["rating"];})

    const mean = total / movie_list.length;
    let std_err = 0;
    movie_list.forEach((data) => {std_err += Math.pow((data.rating - mean), 2);})
    let std = Math.pow(std_err / movie_list.length, 0.5); 

    movie_list.sort((a, b) => b.year - a.year);
    const rec_five = movie_list.slice(0, 5);

    const rating_list = []
    movie_list.forEach((data) => {
        rating_list.push([data.rating])
    });

    const line_list = []
    for (let i = 0; i < movie_list.length; i++){
        line_list.push([movie_list.length - i, movie_list[i].rating]);
    }

    const final_object = {
        "min":min,
        "median":median,
        "max":max,
        "mean":Math.round(mean * 100)/100,
        "std":Math.round(std * 100)/100,
        "rec_five":rec_five,
        "rating_list":rating_list,
        "line_list":line_list
    }

    res.send(final_object);
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

//Finds an actor's recent movies

Router.post("/infoRecent", async(req, res) => {
    const actorName = req.body.name;
    const actorID = await Info.find({name:actorName}, {uid:1})
    var id = new Array()
    var search= [/^acto/,/^actr/]
    Array.from(actorID).forEach(function(test){id.push(test.uid)})
    const famous = await Crew.find({uid:id[0], category: {$in:search}},{tid:1})
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

//Finds a director's recent movies
Router.post("/infoRecentD", async(req, res) => {
    const actorName = req.body.name;
    const actorID = await Info.find({name:actorName}, {uid:1})
    var id = new Array()
    var search= [/^d/,/^dire/]
    Array.from(actorID).forEach(function(test){id.push(test.uid)})
    const famous = await Crew.find({uid:id[0], category: {$in:search}},{tid:1})
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