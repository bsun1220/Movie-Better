import "./accounts.css";
import React, {useState, useEffect, useContext} from "react"
import { Link } from "react-router-dom";
import EditAccount from "./EditAccount";
import VisualPage from "./Visual";
import axios from "axios";
import {UserContext } from '../../UserContext';

//This is our User Account / Transaction Dashboard
//Full functionality is only accesible by logged in users

export default function AccountPage(){
    const [edit, setEdit] = useState("");
    const [visual, setVisual] = useState("");
    //Grabbing the status of the user who is logged in and getting their information
    const [user, setUser] =  useContext(UserContext);

    //Clears the local storage and logs out the user
    const handleLogout = () => {
        localStorage.clear();
        setUser(null)
      };

    useEffect(() => {

        const func = async() => {
            if(user === ""){
                return;
            }
            const url = "http://localhost:5001/getbetuid/" + user.uid;
            const request = await axios.get(url);
            const data = request.data;
        
            const url2 = "http://localhost:5001/gettemp/" + user.uid;
            const request2 = await axios.get(url2);
            const temp = request2.data;
            // console.log("hereiam")
            // console.log(temp)
            //The user and bet dashboard
            setEdit(<EditAccount id = {Math.random()} user = {user} setUser = {setUser} old_user = {user.username} pw = {temp} />)
            setVisual(<VisualPage user = {user} setUser = {setUser} bets = {data} />)

        }
        func();

    }, [user]);
    //If Logged In
    if(user){
    return(
        <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#f2aeb1"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "account.svg" alt = " " height = "100px"/>
                    <h1 style = {{"marginLeft": "20px"}}>Account</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Edit / Bet Portfolio</p>
                <br></br>
                
                <button className = "custom-btn btn red black-text" 
                            onClick = {handleLogout}
                        > Logout
                           </button>

            </div>
            {edit}
            {visual}
        </div>
    )
    }
//If not logged in, do not show the edit or bet dashboard because there is no account to access
else{
    return(  
        <div>  
        <div className = {"frontpage"} style = {{"backgroundColor":"#f2aeb1"}}>
        <div style = {{"display":"flex", "alignItems":"center"}}>
            <img src =  "account.svg" height = "100px"/>
            <h1 style = {{"marginLeft": "20px"}}>Account</h1>
        </div>
        <p style = {{"marginTop":"10px"}}>Edit / Bet Portfolio</p>
    </div>
    <div className = "secondarypage">
    <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>You Are Not Logged In.</h1>
    <p style = {{"marginTop":"10px", "marginBottom":"15px", "fontSize":"30px"}}> <b>Please Login to edit account information.</b></p>
    
    <Link to="/login" className="custom-btn btn amber black-text" >
 Back to
  login page
</Link>
</div>
</div>
    )
}
}