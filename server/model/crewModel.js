import mongoose from "mongoose";
const Schema = mongoose.Schema;
//Model that shows an person's role in a movie; uid is a unique id
//  for each person (their profession can vary from actor to director)
// tid is a unique id for each movie
const CrewSchema = new Schema({
    uid:{
        type:String,
        maxlength:50,
        required:true
    },
    tid:{
        type:String,
        maxlength:50,
        required:true
    },
    category:{
        type:String,
        maxlength:50,
        required:true
    },
    characters:{
        type:String,
        maxlength:100,
        required:true
    }
    

});

const Crew  = mongoose.model("Crew", CrewSchema);
module.exports = Crew;