import mongoose from "mongoose";
const Schema = mongoose.Schema;
//Model for the comments that users make
const CommentSchema = new Schema({
    username:{
        type:String,
        maxlength:50,
        required:true
    },
    content:{
        type:String,
        maxlength:500,
        required:true
    },
    likes:{
        type:Number,
        maxlength:500,
        // required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
    

});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;