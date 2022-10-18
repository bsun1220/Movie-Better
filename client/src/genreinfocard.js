import React from "react";
import './widget.css';

export default function GenreInfoCard(prop){
    return(
        <div className = "card">
            <br></br>
            <h1>{prop.genre}</h1>
            <br></br>
            <br></br>
        </div>

    )
}