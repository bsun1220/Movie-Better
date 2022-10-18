import './widget.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import GenreInfoCard from './genreinfocard';

export default function GenreEndpoint(){

    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");
    const [titleData, setTitleData] = useState("");
    const [movieForm, setMovieForm] = useState("");
    const [inputData, setInputData]= useState("");

    const handleChange = (e) =>{
        setUserInput(e.target.value);
    }

    const handleSubmit = async(e) => {
        const body = {"title":userInput};
        const request = await axios.post(`http://localhost:5001/movieGenres`, body);
        const data = request.data;
        if (data.length === 0){
            setError("TITLE NOT FOUND");
            setTitleData("");
            setUserInput("");
            setMovieForm("");
            setInputData("");
        }
        else{
            setError("");
            setUserInput("");
            setTitleData(data);
            setInputData(userInput +"'s Genres:");
        }
    }

    useEffect(() =>{
        if (titleData !== ""){
            const list = []
            titleData.forEach((data) => {

                const {_id, title, genre} = data;

                list.push(
                    <GenreInfoCard key = {_id} title = 
                    {title} genre= {genre}/>
                )
            })
            setMovieForm(list);
        }
    },[titleData])

    return(
        <div className = "body">
            <h1 style = {{"marginTop":"40px"}}>Genre Endpoint</h1>
            <p>Find the genres of a given movie from our database. Enter name here:</p>
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
            <h1 style = {{"marginTop":"20px",color:"black"}}>{inputData}</h1>
            {movieForm}
            <p style = {{marginTop:"30px", color:"red"}}>{error}</p>
        </div>
    )
}