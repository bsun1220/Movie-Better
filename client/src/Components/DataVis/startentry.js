import React, {useEffect, useState} from "react";
import "./datavis.css"
import axios from "axios";
import MovieDesc from "./moviedesc";
import Chart from "react-google-charts";

export default function StartEntry(){

    const [titleInput, setTitleInput] = useState("");
    const [idInput, setIdInput] = useState("");

    const [titleData, setTitleData] = useState("");
    const [error, setError] = useState("");

    const [desc, setDesc] = useState("");
    const [betDist, setBetDist] = useState("");

    const handleTitleChange = (e) =>{
        setTitleInput(e.target.value); 
    }
    const handleIdChange = (e) => {
        setIdInput(e.target.value);
    }

    useEffect(() => {
        if (titleData === ""){
            return; 
        }
        const adj = titleData.actors.replaceAll(',', ', ');
        const adj1 = titleData.directors.replaceAll(',', ', ');
        const element = <MovieDesc 
            key = {titleData.nmid}
            title = {titleData.title}
            genre = {titleData.genre}
            des = {titleData.desc}
            directors = {adj1}
            actors = {adj}
        />;
        setDesc(element);



    }, [titleData])

    const handleClick = async(e) => {
        e.preventDefault();
        const titleIsEmpty = titleInput.replaceAll(/\s/g, '') === "";
        const idIsEmpty = idInput.replaceAll(/\s/g, '') === "";
        let getData = "";

        const url = "http://localhost:5001/";

        if (titleIsEmpty && idIsEmpty){
            setError("No Input Detected");
            setDesc("");
            setBetDist("");
            return;
        }
        else if (!idIsEmpty){
            const edited_url = url + "betmovieid/" + idInput;
            const request = await axios.get(edited_url);
            getData = request.data;
        }
        else{
            const edited_title = titleInput.replaceAll(/\s/g, '%20');
            const edited_url = url + "betmovietitle/" + edited_title;
            const request = await axios.get(edited_url);
            getData = request.data;
        }

        if (getData.length === 0){
            setError("Title Not Found");
            setDesc("");
            setBetDist("");
        }
        else{
            setError("");

            const check_url = "http://localhost:5001/getbetnmid/" + getData[0].nmid;
            const req = await axios.get(check_url);
            const data = req.data;

            const obj = [['Rating', 'Amount'],[0,0],[1,0],[2,0],
            [3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10, 0]];

            data.forEach((element) => {
                const adj = Math.round(element.rating);
                obj[adj + 1][1] += element.amount;
            })

            const chartOption = {
                title: `${getData[0].title} Bet Distribution`,
                legend: {position: 'top', maxLines : 2},
                colors: ['#5D47C7'],
                interpolateNulls: false,
            }

            const chart =  
            <div style = {{"borderStyle":"solid", "marginBottom":"20px", "width":"40vw"}}><Chart 
                chartType = "ColumnChart"
                loader={<div>Loading Chart...</div>}
                options = {(chartOption)}
                data = {obj}
            /></div>

            setBetDist(chart);
            setTitleData(getData[0]);
        }

    }

    return <div className = "secondarypage">
        <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>Data Entry</h1>
        <p style = {{"marginTop":"10px", "marginBottom":"30px"}}> What 2023 movie would you like to research?</p>
        <div className = "dataentrybutton">
            <form onSubmit = {handleClick}>
                <input
                onChange = {handleIdChange}
                type = {"text"}
                placeholder = {"enter id (or)"}
                value = {idInput}
                />
                <textarea 
                onChange = {handleTitleChange}
                type = {"text"}
                placeholder = {"enter title"}
                value = {titleInput}
                />
            </form>
            <button className = "custom-btn btn amber black-text" onClick = {handleClick}>Submit</button>
        </div>
        <p style = {{"color":"red", "marginTop":"30px", "fontWeight":"bold"}}>{error}</p>
        {betDist}
        {desc}
    </div>
}