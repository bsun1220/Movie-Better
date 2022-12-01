import "./accounts.css";
import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import EditAccount from "./EditAccount";
import VisualPage from "./Visual";
import axios from "axios";
import Logout from "../NewLogin/Logout";

export default function AccountPage(){
    const [edit, setEdit] = useState("");
    const [visual, setVisual] = useState("");

    const [user, setUserData] =  useState( JSON.parse(localStorage.getItem("user")));

    const handleLogout = () => {
        localStorage.clear();
        setUserData()

      };

    useEffect(() => {

        const func = async() => {
            if(user === ""){
                return;
            }
            const url = "http://localhost:5001/getbetuid/" + user.uid;
            const request = await axios.get(url);
            const data = request.data;
            // setEdit(<EditAccount id = {Math.random()} setUserData = {setUserData} user = {user} old_user = {user.username}/>)
            // setVisual(<VisualPage user = {user} bets = {data} setUserData = {setUserData}/>)

            setEdit(<EditAccount id = {Math.random()} user = {user} setUserData = {setUserData} old_user = {user.username}/>)
            setVisual(<VisualPage user = {user} setUserData = {setUserData} bets = {data} />)
            // setLogin("");
        }
        func();

    }, [user]);
    if(user){
    return(
        <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#f2aeb1"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "account.svg" height = "100px"/>
                    <h1 style = {{"marginLeft": "20px"}}>Account</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Edit / Bet Portfolio</p>
                <br></br>
                
                <button className = "custom-btn btn red black-text" 
                            onClick = {handleLogout}
                        > Logout
                           </button>

            </div>
            {/* {login} */}
            {edit}
            {visual}
        </div>
    )
    }
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