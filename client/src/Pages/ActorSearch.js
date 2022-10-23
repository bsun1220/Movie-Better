import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieInfoCard from '../Components/InfoCards/MovieInfoCard';

export default function ActorSearch(){

    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");
    const [titleData, setTitleData] = useState("");
    const [movieForm, setMovieForm] = useState("");

    const handleChange = (e) =>{
        setUserInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        const body = {"name":userInput};
        const request = await axios.post(`http://localhost:5001/infoRecent`, body);
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

                const {title, year, length, tid, votes, rating} = data;

                list.push(
                    <MovieInfoCard key = {tid} title = 
                    {title} year = {year} length = {length}
                    rating = {rating} votes = {votes}/>
                )
            })
            setMovieForm(list);
        }
    },[titleData])

    return(
        <div className = "body">
            <h1 style = {{"marginTop":"40px"}}>Actor Search</h1>
            <p>Find the recent movies that a given actor has played in. Enter name here:</p>
            <div className = "hi">
                <form>
                    <input 
                        onChange = {handleChange}
                        type = {"text"}
                        placeholder = {"enter name"}
                        style = {{"maxHeight":"150px","minHeight":"30px","lineHeight":"1", "minWidth":"30vw", "maxWidth":"30vw"}}
                        value = {userInput}/>
                </form>
                <button className = "custom-btn btn amber black-text" style = {{"width":"30.5vw"}} onClick = {handleSubmit}>
                    Submit</button>
            </div>
            <br></br>
            {movieForm}
            <p style = {{marginTop:"30px", color:"red"}}>{error}</p>
        </div>
    )
}