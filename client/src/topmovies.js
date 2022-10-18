import './widget.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import TopInfoCard from './topinfocard';

export default function TopMovies(){

    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");
    const [titleData, setTitleData] = useState("");
    const [movieForm, setMovieForm] = useState("");

    const handleChange = (e) =>{
        setUserInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        const body = {"name":userInput};
        const request = await axios.post(`http://localhost:5001/info`, body);
        const data = request.data;
        if (data.length === 0){
            setError("ACTOR NOT FOUND");
            setTitleData("");
            setUserInput("");
            setMovieForm("");
        }
        else{
            setError("");
            setUserInput("");
            setTitleData(data);
        }
    }

    useEffect(() =>{
        if (titleData !== ""){
            const list = []
            titleData.forEach((data) => {

                const {uid, name, birthYear, primaryProfession, deathYear} = data;

                list.push(
                    <TopInfoCard uid = {uid} name = 
                    {name} birthYear = {birthYear} deathYear = {deathYear}
                    primaryProfession = {primaryProfession}/>
                )
            })
            setMovieForm(list);
        }
    },[titleData])

    return(
        <div className = "body">
            <h1 style = {{"marginTop":"40px"}}>Top Movies</h1>
            <p>Find the most famous movies that a given actor is in. Enter actor name here:</p>
            <div className = "hi">
                <form>
                    <textarea 
                        onChange = {handleChange}
                        type = {"text"}
                        placeholder = {"enter title"}
                        style = {{"maxHeight":"150px","minHeight":"30px","lineHeight":"1", "minWidth":"30vw", "maxWidth":"30vw"}}
                        value = {userInput}/>
                </form>
                <button style = {{"width":"30.5vw"}} onClick = {handleSubmit}>
                    Submit</button>
            </div>
            {movieForm}
            <p style = {{marginTop:"30px", color:"red"}}>{error}</p>
        </div>
    )
}