import React, {useState , useEffect} from "react";
import MovieCard from "./card";
import "./betting.css";
import axios from "axios";

export default function BettingPage(){

    const [login, setLogin] = useState(true);
    const [buttonMessage, setMessage] = useState("login");
    const [movies, setMovies] = useState("");

    useEffect(() => {
        if (login){
            setMessage("Log In");
        }
        else{
            setMessage("Create");
        }
    }, [login]);

    useEffect(() => {
        const func = async() =>{
            const url = "http://localhost:5001/betmovieid";
            const request = await axios.get(url);
            const data = request.data;
            const list = []
            data.forEach((element) => {
                const card = <MovieCard id = {Math.random()} data = {element}/>
                list.push(card);
            })
            setMovies(list);
        };
        func();
    }, []);

    const handleLoginButton = (e) =>{
        setLogin(!login);
    }

    return(
        <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#5d47c7"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "coin.svg" height = "100px"/>
                    <h1 style = {{"marginLeft": "20px"}}>Betting</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Platform</p>
            </div>
            <div className = {"aboutpage"}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <h1 style = {{"marginLeft": "20px"}}>Login Information</h1>
                </div>
                <hr style = {{"width":"40vw"}}/>
                <div className = {"login"}>
                    <input type = {"text"}
                            style = {{"width":"30vw"}}/>
                    <label>Username</label>
                    <input type = {"password"}
                            style = {{"width":"30vw"}}/>
                    <label>Password</label>
                    <div style = {{"marginTop":"40px"}}>
                        <button className = "custom-btn btn amber black-text" 
                            onClick = {handleLoginButton}
                            style = {{"width":"10vw", "marginRight":"20px"}}>
                            {buttonMessage}</button>
                        <button className = "custom-btn btn amber black-text" style = {{"width":"10vw"}}>Submit</button>
                    </div>
                </div>
            </div>
            <div className = "secondarypage">
                <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>Betting</h1>
                <p style = {{"marginTop":"10px", "marginBottom":"30px"}}>Pick a Movie</p>
                <div className  = "movielist">
                    {movies}
                </div>
            </div>
        </div>
    )
}