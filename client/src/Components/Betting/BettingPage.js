import React, {useState , useEffect} from "react";
import MovieCard from "./card";
import { Link } from "react-router-dom";
import "./betting.css";
import axios from "axios";
import Login from "./OldLogin";

export default function BettingPage(){
    const [movies, setMovies] = useState("");
    const [user, setUserData] = useState(JSON.parse(localStorage.getItem("user")));

    // useEffect(() => {
        const func = async() =>{
            const url = "http://localhost:5001/betmovieid";
            const request = await axios.get(url);
            const data = request.data;
            const list = []
            data.forEach((element) => {
                const card = <MovieCard key = {element.nmid} data = {element} user = {user} setUserData = {setUserData}/>
                list.push(card);
            })
            setMovies(list);
        };
        func();
    // }, [user]);

    if(user){

    return(
        <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#5d47c7"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "coin.svg" height = "100px"/>
                    <h1 style = {{"marginLeft": "20px"}}>Betting</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Platform</p>
            </div>
            {/* <Login setUserData = {setUserData}/> */}

            <div className = "secondarypage">
                <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>You Are Logged In As:</h1>
                <p style = {{"marginTop":"10px", "marginBottom":"15px", "fontSize":"30px"}}> <b>Username:</b> {user.username}</p>
                <p style = {{"marginTop":"10px", "marginBottom":"15px", "fontSize":"30px"}}> <b>First Name:</b> {user.firstname}</p>
                <p style = {{"marginTop":"10px", "marginBottom":"15px", "fontSize":"30px"}}> <b>Last Name:</b> {user.lastname}</p>
                <p style = {{"marginTop":"10px", "marginBottom":"15px", "color":"green", "fontSize":"30px"}}> <b>Current Balance:</b> ${user.balance}</p>
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
    else{

        return(
            <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#5d47c7"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "coin.svg" height = "100px"/>
                    <h1 style = {{"marginLeft": "20px"}}>Betting</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Platform</p>
            </div>
            {/* <Login setUserData = {setUserData}/> */}

            <div className = "secondarypage">
                <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>You Are Not Logged In.</h1>
                <p style = {{"marginTop":"10px", "marginBottom":"15px", "fontSize":"30px"}}> <b>Please Log in to place bets.</b></p>
                <Link to="/login" className="custom-btn btn amber black-text" >
             Back to
              login page
            </Link>
         </div>

        </div>

        )
    }


}