import React, {useState , useEffect} from "react";
import MovieCard from "./card";
import "./betting.css";
import axios from "axios";
import Login from "./Login";

export default function BettingPage(){
    const [movies, setMovies] = useState("");
    const [user, setUserData] = useState("");

    useEffect(() => {
        const func = async() =>{
            const url = "http://localhost:5001/betmovieid";
            const request = await axios.get(url);
            const data = request.data;
            const list = []
            data.forEach((element) => {
                const card = <MovieCard id = {element.nmid} data = {element} user = {user}/>
                list.push(card);
            })
            setMovies(list);
        };
        func();
    }, [user]);

    return(
        <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#5d47c7"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "coin.svg" height = "100px"/>
                    <h1 style = {{"marginLeft": "20px"}}>Betting</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Platform</p>
            </div>
            <Login setUserData = {setUserData}/>
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