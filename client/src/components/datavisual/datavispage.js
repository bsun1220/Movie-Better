import React from "react";
import "../generalstyle/general.css"

export default function DataVisPage(){
    return(<div>
        <div className = {"frontpage"}>
            <div style = {{"display":"flex", "alignItems":"center"}}>
                <img src = "research.svg" height = "100px"/>
                <h1 style = {{"marginLeft": "20px"}}>DataVis</h1>
            </div>
            <p style = {{"marginTop":"10px"}}>Quant Research</p>
        </div>
        <div className = {"aboutpage"}>
            <h1>How to Use</h1>
            <hr/>
        </div>

    </div>)
}