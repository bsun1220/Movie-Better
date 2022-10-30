import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BetSchema = new Schema({
    uid:{
        type:String,
        maxlength:100,
        required:true,
    },
    nmid:{
        type:String,
        maxlength:100,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
});

const Bet = mongoose.model("bet", BetSchema);
module.exports = Bet;