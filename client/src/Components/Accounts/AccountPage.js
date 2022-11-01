import "./accounts.css";
import React, {useState, useEffect} from "react"
import Login from "../Betting/Login";
import EditAccount from "./EditAccount";

export default function AccountPage(){
    const [user, setUserData] = useState("");
    const [edit, setEdit] = useState("");

    const [login, setLogin] = useState(<Login setUserData = {setUserData}/>);
    console.log(user);
    useEffect(() => {
        if(user == ""){
            return;
        }
        setEdit(<EditAccount setUserData = {setUserData} user = {user}/>)
        setLogin("");

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
        </div>
    )
}