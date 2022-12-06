import React from "react"
import LookUp from "../Accounts/lookup";
import LeaderBoard from "../Accounts/leaderboard";

//Our bettor page where users can lookup other bettors
//And view leaderboards of all of our user base
export default function BettorPage(){


    return(
        <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#7eb37a"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "account.svg" height = "100px"/>
                    <h1 style = {{"marginLeft": "20px"}}>Bettors</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Lookup/Leaderboard</p>
            </div>

            <LookUp/>
            <LeaderBoard/>
        </div>
    )
}