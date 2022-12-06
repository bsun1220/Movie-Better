import mongoose from "mongoose";
const Schema = mongoose.Schema;
//Model on the past movies in our database (excluding 2023 releases)
//tid are unique to each movie, and we get title, year, length, rating, and votes
const MovieSchema = new Schema({
    tid:{
        type:String,
        maxlength:50,
        required:true,
        unique:true
    },
    title:{
        type:String,
        maxlength:100,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    length:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    votes:{
        type:Number,
        required:true
    }

});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;