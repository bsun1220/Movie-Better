import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieInfoCard from '../../movieinfocard';

export default function ActorAnalysis(props){

    const [buttonData, setButtonData] = useState("");
    const actor_data = props.actors.split(", ")
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");
    const [titleData, setTitleData] = useState("");
    const [movieForm, setMovieForm] = useState("");

    const handleClick = async (e) =>{
        console.log(e.target.value);
        const body = {"name":e.target.value};
        console.log("name passed");
        console.log(body.name);
        const request = await axios.post(`http://localhost:5001/infoRecent`, body);
        const data1 = request.data;
        console.log("sent data")
        console.log(data1)
        if (data1.length === 0){
            setError("NO RECENT MOVIES");
            setTitleData("");
            setUserInput("");
            setMovieForm("");
        }
        else{
            setError("");
            setUserInput(body.name+"'s Recent Movies:");
            setTitleData(data1);
    
        }

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
        <div className = "analysis">
        <h1 style = {{"marginBottom":"30px"}}>Actor Analysis</h1>
        <div className = "selectoption">
            <div className = "buttonsetup">
            {buttonData}
            </div>
            <p style = {{"margin":"30px"}}> <i>Select an Actor to Analyze</i></p>
        </div>
        <div className="body">
        <h1 style = {{"marginTop":"20px",color:"black"}}>{userInput}</h1>
               {movieForm}
               <p style = {{marginTop:"30px", color:"red"}}>{error}</p>
        </div>
        </div>
    )
}