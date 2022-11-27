// import "./accounts.css";
import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import LookUp from "../Accounts/lookup";
import LeaderBoard from "../Accounts/leaderboard";
import axios from "axios";

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