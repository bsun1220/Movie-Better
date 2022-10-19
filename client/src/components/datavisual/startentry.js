import React, {useState} from "react";
import "../generalstyle/general.css"
import "./datavis.css"
import axios from "axios";

export default function StartEntry(){

    const [titleInput, setTitleInput] = useState("");
    const [idInput, setIdInput] = useState("");

    const [titleData, setTitleData] = useState("");
    const [error, setError] = useState("");

    const handleTitleChange = (e) =>{
        setTitleInput(e.target.value); 
    }
    const handleIdChange = (e) => {
        setIdInput(e.target.value);
    }

    const handleClick = async(e) => {
        const titleIsEmpty = titleInput.replaceAll(/\s/g, '') === "";
        const idIsEmpty = idInput.replaceAll(/\s/g, '') === "";
        let getData = "";

        const url = "http://localhost:5001/";

        if (titleIsEmpty && idIsEmpty){
            setError("No Input Detected");
            return;
        }
        else if (titleIsEmpty){
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

        if (getData.length == 0){
            setError("Title Not Found");
        }
        else{
            setError("");
            setTitleData(getData[0]);
        }

    }

    return <div className = "secondarypage">
        <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>Data Entry</h1>
        <p style = {{"marginTop":"10px", "marginBottom":"30px"}}> What movie would you like to research?</p>
        <div className = "dataentrybutton">
            <form>
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
    </div>
}