import mongoose from "mongoose";
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    uid:{
        type:String,
        maxlength:50,
        required:true,
        unique:true
    },
    name:{
        type:String,
        maxlength:100,
        required:true
    },
    birthYear:{
        type:Number,
        required:true
    },
    deathYear:{
        type:Number,
        required:true
    },
    primaryProfession:{
        type:String,
        maxlength:100,
        required:true
    }
    

});

const Info = mongoose.model("Info", InfoSchema);
module.exports = Info;