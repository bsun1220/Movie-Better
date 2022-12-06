import React, {useState, useContext } from "react";
import MovieCard from "./card";
import { Link } from "react-router-dom";
import "./betting.css";
import axios from "axios";
import {UserContext } from '../../UserContext';

//This is our Betting Movie Inventory and Platform
//The inventory of movies is not available to everyone; you must be logged in
//If not logged in, you will be redirected to a the login page


export default function BettingPage(){
    const [movies, setMovies] = useState("");
    const [user, setUser] =  useContext(UserContext);

        const func = async() =>{
            const url = "http://localhost:5001/betmovieid";
            const request = await axios.get(url);
            const data = request.data;
            const list = []
            data.forEach((element) => {
                const card = <MovieCard key = {element.nmid} data = {element} user = {user} setUser = {setUser}/>
                list.push(card);
            })
            setMovies(list);
        };
        func();

    if(user){

    return(
        <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#5d47c7"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "coin.svg" height = "100px" alt="coin"/>
                    <h1 style = {{"marginLeft": "20px"}}>Betting</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Platform</p>
            </div>

            <div className = "secondarypage">
            <p style = {{"marginTop":"10px", "marginBottom":"15px", "color":"green", "fontSize":"30px"}}> <b>Current Balance:</b> ${user.balance}</p>
                <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>Betting</h1>
                <p style = {{"marginTop":"10px", "marginBottom":"30px"}}>Pick a Movie</p>
                <div className  = "movielist">
                    {movies}
                </div>
            </div>
        </div>
    )
    }
    else{

        return(
            <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#5d47c7"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "coin.svg" height = "100px" alt="coin"/>
                    <h1 style = {{"marginLeft": "20px"}}>Betting</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Platform</p>
            </div>

            <div className = "secondarypage">
                <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>You Are Not Logged In.</h1>
                <p style = {{"marginTop":"10px", "marginBottom":"15px", "fontSize":"30px"}}> <b>Please Log in to place bets.</b></p>
                <Link to="/login" className="custom-btn btn amber black-text" >
            Login
            </Link>
         </div>

        </div>

        )
    }


}