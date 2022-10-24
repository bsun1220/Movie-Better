import React from "react";
import StartEntry from "./startentry";

export default function DataVisPage(){

    return(<div>
        <div className = {"frontpage"}>
            <div style = {{"display":"flex", "alignItems":"center"}}>
                <img src =  "research.svg" height = "100px"/>
                <h1 style = {{"marginLeft": "20px"}}>DataVis</h1>
            </div>
            <p style = {{"marginTop":"10px"}}>Quant Research</p>
        </div>
        <div className = {"aboutpage"}>
            <div style = {{"display":"flex", "alignItems":"center"}}>
                <img src = "questionmark.svg" height = "40px"/>
                <h1 style = {{"marginLeft": "20px"}}>How To Use</h1>
            </div>
            <hr/>
            <p> The main purpose of DataVis is to allow potential bettors to 
                research quantitative trends behind movies they are hoping to predict values for. Through careful analysis, from
                examining past genre time series analysis, director rating, and actor rating, DataVis ensures that users are able
                to fully understand all the information they need to know to decide what their predicted value should be.
            </p>
            <p>
                The steps for this tool is as follows. First, the user will select a movie in 2023 that they want to conduct analysis on. 
                From there, the user will receive basic information from this movie, including genre, title, director, and actors. From there,
                the user can continue to conduct future analysis. For example, the user can examine the past movies from the director in the form 
                of time series analysis. Other features include search by actor and genre analysis. The user can add more restrictions
                within their search, allowing for more pinpoint precision, with data originating from IDMB. 
            </p>
            <p>
                After conducting this analysis, a user can examine other trends such as the total number of bets being placed on the 2023 movie
                to find if they believe that the general consensus on this movie is incorrect or not. After they have decided fully 
                on what the predicted value is, the user can place a bet on the separate betting platform page.
            </p>
        </div>
        <StartEntry/>


    </div>)
}