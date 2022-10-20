import React, { useEffect, useState } from "react";


export default function ActorAnalysis(props){

    const [buttonData, setButtonData] = useState("");
    const actor_data = props.actors.split(", ")

    const handleClick = (e) =>{
        console.log(e.target.value);
    }

    useEffect(() => {
        const list = [];
        actor_data.forEach((data) => {
            const element = <button onClick = {handleClick} 
                                    class = "secondarybutton"
                                    value = {data}>
                                    {data}</button>
            list.push(element)
        })
        setButtonData(list)
    }, []);

    return(
        <div className = "analysis">
        <h1 style = {{"marginBottom":"30px"}}>Actor Analysis</h1>
        <div className = "selectoption">
            <div className = "buttonsetup">
            {buttonData}
            </div>
            <p style = {{"margin":"30px"}}> <i>Select an Actor to Analyze</i></p>
        </div>
        
        </div>
    )
}