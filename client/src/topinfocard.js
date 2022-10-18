import React from "react";
import './widget.css';

export default function TopInfoCard(prop){
    return(
        <div className = "card">
            <h1>{prop.name}</h1>
            <hr/>
            <p>UID : {prop.uid}</p>
            <p>Birth Year : {prop.birthYear}</p>
            <p>Death Year : {prop.deathYear}</p>
            <p>Professions : {prop.primaryProfession}</p>
        </div>

    )
}
