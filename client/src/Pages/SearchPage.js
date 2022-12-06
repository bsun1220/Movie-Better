import React from "react";
import ActorSearch from "./ActorSearch";
import DirectorSearch from "./DirectorSearch";
import GenreSearch from "./GenreSearch";
import TimeSearch from "./TimeSearch";
import TitleSearch from "./TitleSearch";
import LengthSearch from "./LengthSearch";

// This is our Movie Inventory page/ search page 
//This is connected to an extensive database on movies from IMDB from the past to 2022
//Users can choose different types of queries to do, such as by actor, director, etc

export default function SearchPage(){
    return <div>
        <div className = {"frontpage"}>
            <div style = {{"display":"flex", "alignItems":"center"}}>
                <img src =  "movie.svg" height = "100px"/>
                <h1 style = {{"marginLeft": "20px"}}>Encyclopedia</h1>
            </div>
            <p style = {{"marginTop":"10px"}}>Analysis</p>
        </div>
        <div className = {"aboutpage"}>
            <div style = {{"display":"flex", "alignItems":"center"}}>
                <img src = "questionmark.svg" height = "40px"/>
                <h1 style = {{"marginLeft": "20px"}}>How To Use</h1>
            </div>
            <hr/>
            <p> Whereas DataVis allows people to research future released movies to conduct analysis on whether they want to bet on a certain 
                rating or not based on genre, director, and analysis, Encyclopedia focuses on allowing users to research past movies through 
                accessing various different metrics from rating to genre to length to year released. 
            </p>
            <p> From these various queries, users can look at the list of movies from our database of 20,000 movies taken from IMDB. All the user needs
                to do is look at the correct inputs to each of the 6 queries and click the submit button when finished. When completed,
                the user will see the list of movies in the past which correspond to the questions they may be asking in their data query.
            </p>
            <p>
                The database of previously released movies include every movie that has identified as "Movie" in the IMDB database, had more than
                10,000 votes on the IMDB movie base, and had readily available data including director, writer, genre, length, and release date information.
                This data was taken directly from the IMDB website. 
            </p>
        </div>
        <TitleSearch/>
        <ActorSearch/>
        <DirectorSearch/>
        <GenreSearch/>
        <TimeSearch/>
        <LengthSearch/>
    </div>
}