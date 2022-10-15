import mongoose from "mongoose";
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    tid:{
        type:String,
        maxlength:50,
        required:true,
        unique:true
    },
    genre:{
        type:String,
        required:true
    }

});

const Genre = mongoose.model("Genre", GenreSchema);
module.exports = Genre;