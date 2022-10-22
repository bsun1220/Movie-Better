import React, { useEffect, useState } from "react";
import axios from "axios";
import DirectorData from "./directordata";


export default function DirectorAnalysis(props){
    const [buttonData, setButtonData] = useState("");
    const director_data = props.directors.split(", ")
    const [datapage, setDataPage] = useState("");

    const handleClick = async(e) =>{
        const val = e.target.value;
        const url = 'http://localhost:5001/director/' + val;
        const request  = await axios.get(url);
        const data = request.data;
        if (data.length === 0){
            setDataPage(<p style = {{"marginTop":"50px", "color":"red"}}>
                No Data Found</p>)
        }
        else{
            data["director"] = val;
            data["rating_list"].splice(0, 0, [val]);
            data["line_list"].splice(0, 0, ["entry", "Rating"]);
            setDataPage(<DirectorData  key = {val} data = {data}/>);
        }

    }

    useEffect(() => {
        const list = [];
        director_data.forEach((data) => {
            const element = <button 
                                    key = {Math.random()}
                                    onClick = {handleClick} 
                                    className = "secondarybutton"
                                    value = {data}>
                                    {data}</button>
            list.push(element)
        })
        setButtonData(list)
    }, []);

    return(
        <div className = "analysis">
            <h1 style = {{"marginBottom":"30px"}}>Director Analysis</h1>
            <div className = "selectoption">
                <div className = "buttonsetup">
                {buttonData}
                </div>
                <p style = {{"margin":"30px"}}> <i>Select a Director to Analyze</i></p>
            </div>
            {datapage}
        </div>
    )
}