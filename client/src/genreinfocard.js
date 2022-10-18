import React from "react";
import './widget.css';

export default function GenreInfoCard(prop){
    return(
        <div className = "card">
            <h1>{prop.title}</h1>
            <hr/>
            <p>Genre : {prop.genre}</p>
        </div>

    )
}