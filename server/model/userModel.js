import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    uid:{
        type:String,
        maxlength:100,
        required:true,
        unique:true
    },
    username:{
        type:String,
        maxlength:100,
        required:true,
        unique:true
    },
    password:{
        type:String,
        maxlength:100,
        required:true
    },
    firstname:{
        type:String,
        maxlength:40,
        default:""
    },
    lastname:{
        type:String,
        maxlength:40,
        default:""
    }, 
    start:{
        type:Date,
        default:Date.now
    }, 
    balance:{
        type:Number,
        default:1000
    },
    usedRef:{
        type:Boolean,
        default: false
    }
});

const User = mongoose.model("user", UserSchema);
module.exports = User;