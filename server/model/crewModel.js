import mongoose from "mongoose";
const Schema = mongoose.Schema;

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