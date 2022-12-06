import React, {useState, useEffect} from "react";
import LeaderCard from "./leadercard";
import axios from "axios";

//This is to display bettor leaderboards found on the Bettors page
//Ranked by most bets places and most money spent
export default function LeaderBoard(){

    const [leader1, setLeader1] = useState("");
    const [leader2, setLeader2] = useState("");

    useEffect(() => {
        const func = async() => {
            const url = "http://localhost:5001/";
            const req1 = await axios.get(url + "leaderboard1");
            const data1 = req1.data;
            const req2 = await axios.get(url + "leaderboard2");
            const data2 = req2.data;
            setLeader1(data1);
            setLeader2(data2);
        }
        func();
    }, []);

    return(
        <div className = "lookup">
            <h1 style = {{"fontSize":"40px"}}>Leaderboard</h1>
            <div className = "leadersection">
                <LeaderCard title = {"Most Money Spent"} data = {leader1}/>
                <LeaderCard title = {"Most Number of Bets"} data = {leader2}/>
                <LeaderCard title = {"Most Profit"} content = {"Coming soon!"} data = {[]}/>
            </div>
        </div>
    )
}