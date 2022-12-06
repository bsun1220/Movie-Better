import mongoose from "mongoose";
const Schema = mongoose.Schema;
//Model that shows the genre of a given movie, using its tid
const GenreSchema = new Schema({
    tid:{
        type:String,
        maxlength:50,
        required:true
    },
    genre:{
        type:String,
        required:true
    }

});

const Genre = mongoose.model("Genre", GenreSchema);
module.exports = Genre;