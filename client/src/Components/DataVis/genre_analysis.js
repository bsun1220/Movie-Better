import React, { useEffect, useState } from "react";
import axios from "axios";
import GenreData from "./genredata";

export default function GenreAnalysis(props){
    const [buttonData, setButtonData] = useState("");
    const genre_data = props.genre.split(", ");

    const [datapage, setDataPage] = useState("");

    const handleClick = async(e) =>{
        const val = e.target.value;
        const url = 'http://localhost:5001/genre/' + val;
        const request  = await axios.get(url);
        const data = request.data;

        if (data.length === 0){
            setDataPage(<p style = {{"marginTop":"50px", "color":"red"}}>
                No Data Found</p>)
        }
        else{
            data["genre"] = val;
            data["rating_data"].splice(0, 0, [val]);
            data["expanding_mean"].splice(0, 0, ["entry", "Mean Rating"]);
            setDataPage(<GenreData  key = {"genre"} data = {data}/>);
        }
    }

    useEffect(() => {
        const list = [];
        genre_data.forEach((data) => {
            const element = <button onClick = {handleClick} 
                                    key = {Math.random()}
                                    className = "secondarybutton"
                                    value = {data}>
                                    {data}</button>
            list.push(element)
        })
        setButtonData(list)
    }, []);

    return(
        <div className = "analysis">
            <h1 style = {{"marginBottom":"30px"}}>Genre Analysis</h1>
            <div className = "selectoption">
                <div className = "buttonsetup">
                {buttonData}
                </div>
                <p style = {{"margin":"30px"}}> <i>Select a Genre to Analyze</i></p>
            </div>
            {datapage}

        </div>
    )
}