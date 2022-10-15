import React from "react";
import './widget.css';

export default function MovieInfoCard(prop){
    return(
        <div className = "card">
            <h1>{prop.title}</h1>
            <hr/>
            <p>Year Produced : {prop.year}</p>
            <p>Length (Minutes) : {prop.length}</p>
            <p>Rating : {prop.rating}</p>
            <p>Votes : {prop.votes}</p>
        </div>

    )
}