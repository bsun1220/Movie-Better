import React from "react";
import './widget.css';

export default function PracticeInfoCard(prop){
    return(
        <div className = "card">
            <h1>{prop.genre}</h1>
            <hr/>
            <p>TID : {prop.tid}</p>

        </div>

    )
}