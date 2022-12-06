import React, {useState} from "react";
import axios from "axios";
import Card from "./card";

//This is our bettor lookup
//You can look for any user by their username 
//it will display a basic portfolio on them
export default function LookUp(){

    const [error, setError] = useState("");
    const [title, setTitle] = useState("");

    const handleSubmit = async(e) => {
        const val = title.replace(/\s/g, '')
        if (e.key === "Enter" & val !== ""){
            const url = "http://localhost:5001/login/" + val;
            const req = await axios.get(url);
            const data = req.data;
            if (data.length ===  0){
                setError(<p style = {{"color":"red"}}>User Not Found</p>)
            }
            else{
                setError(<Card data = {data[0]}/>)
            }
        }

    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return(
        <div className = "lookup">
            <h1 style = {{"fontSize":"40px"}}>Bettor Lookup</h1>
            <p>Search Up a Username</p>
            <input type = "text" style = {{"width":"20%", "color":"white"}} 
                    onChange = {handleChange}
                    value = {title}
                    onKeyDown = {handleSubmit}/>
            {error}
        </div>
    )
}
