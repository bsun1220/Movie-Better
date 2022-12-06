import mongoose from "mongoose";
const Schema = mongoose.Schema;
//Model for 2023 movies that will be bet on by users
const BetMovieSchema = new Schema({
    nmid:{
        type:String,
        maxlength:50,
        required:true
    },
    title:{
        type:String,
        maxlength:100,
        required:true
    },
    genre:{
        type:String,
        maxlength:100,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    directors:{
        type:String,
        required:true
    },
    actors:{
        type:String,
        required:true
    }
    

});

const BetMovie  = mongoose.model("BetMovie", BetMovieSchema);
module.exports = BetMovie;