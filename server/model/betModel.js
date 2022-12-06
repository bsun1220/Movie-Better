import mongoose from "mongoose";
const Schema = mongoose.Schema;
//Model for the bets made on a movie by a user
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