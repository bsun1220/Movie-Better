import React, {useEffect, useState} from "react";
import "../generalstyle/general.css"
import "./datavis.css"
import axios from "axios";
import MovieDesc from "./moviedesc";

export default function StartEntry(){

    const [titleInput, setTitleInput] = useState("");
    const [idInput, setIdInput] = useState("");

    const [titleData, setTitleData] = useState("");
    const [error, setError] = useState("");

    const [desc, setDesc] = useState("");

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
        let element = <MovieDesc 
            nmin = {titleData.nmid}
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
        }
        else{
            setError("");
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
            <button onClick = {handleClick}>Submit</button>
        </div>
        <p style = {{"color":"red", "marginTop":"30px", "fontWeight":"bold"}}>{error}</p>
        {desc}
    </div>
}