import mongoose from "mongoose";
const Schema = mongoose.Schema;
//Model that shows a person's top 4 movies they are involved with
//uid is a unique id for a person's info
//tid is the unique id for the movie
const FamousSchema = new Schema({
    uid:{
        type:String,
        maxlength:50,
        required:true
    },
    tid:{
        type:String,
        required:true
    }

});

const Famous = mongoose.model("Famous", FamousSchema);
module.exports = Famous;