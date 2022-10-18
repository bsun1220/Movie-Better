import mongoose from "mongoose";
const Schema = mongoose.Schema;

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