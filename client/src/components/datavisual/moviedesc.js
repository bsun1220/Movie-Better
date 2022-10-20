import React from "react";

export default function MovieDesc(props){


    return(
    <div className = "desc">
        <h1>{props.title} (2023)</h1>
        <p> <i>{props.genre}</i></p>
        <hr/>
        <p>{props.des}</p>
        <div className = "space"/>
        <p style = {{"fontSize":"12px"}}>Directors: {props.directors}</p>
        <p style = {{"fontSize":"12px"}}>Actors: {props.actors}</p>
    </div>)
}