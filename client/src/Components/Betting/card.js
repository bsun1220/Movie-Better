import React from "react";


export default function MovieCard(props){

    return(<div className = "moviecard">
        <h1>{props.data.title}</h1>
        <hr/>
        <p style = {{"marginBottom":"10px", "color":"black"}}>{props.data.nmid}</p>
        <p>{props.data.desc}</p>
    </div>)
}