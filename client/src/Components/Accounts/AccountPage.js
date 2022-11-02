import "./accounts.css";
import React, {useState, useEffect} from "react"
import Login from "../Betting/Login";
import EditAccount from "./EditAccount";
import VisualPage from "./Visual";
import axios from "axios";

export default function AccountPage(){
    const [user, setUserData] = useState("");
    const [edit, setEdit] = useState("");
    const [visual, setVisual] = useState("");

    const [login, setLogin] = useState(<Login setUserData = {setUserData}/>);
    useEffect(() => {

        const func = async() => {
            if(user === ""){
                return;
            }

            const url = "http://localhost:5001/getbetuid/" + user.uid;
            const request = await axios.get(url);
            const data = request.data;

            setEdit(<EditAccount id = {Math.random()} setUserData = {setUserData} user = {user} old_user = {user.username}/>)
            setVisual(<VisualPage user = {user} bets = {data} setUserData = {setUserData}/>)
            setLogin("");
        }
        func();

    }, [user]);

    return(
        <div>
            <div className = {"frontpage"} style = {{"backgroundColor":"#f2aeb1"}}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <img src =  "account.svg" height = "100px"/>
                    <h1 style = {{"marginLeft": "20px"}}>Account</h1>
                </div>
                <p style = {{"marginTop":"10px"}}>Login / Create</p>
            </div>
            {login}
            {edit}
            {visual}
        </div>
    )
}