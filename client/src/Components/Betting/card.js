import React, {useState} from "react";
import axios from "axios";

export default function MovieCard(props){
    
    const [rating, setRating] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (props.user == ""){
            setError(<p style = {{"marginTop":"10px","color":"red"} }>Not Logged In</p>)
            return;
        }
        const rating_num = parseFloat(rating);
        const amount_num = parseFloat(amount);

        if(isNaN(rating_num) || isNaN(amount_num)){
            setError(<p style = {{"marginTop":"10px","color":"red"} }>Invalid Input</p>)
            return; 
        }

        if(rating_num < 0 || rating_num > 10 || amount_num < 0){
            setError(<p style = {{"marginTop":"10px","color":"red"} }>Invalid Input</p>)
            return; 
        }



        

    }

    const inputOne = (e) => {
        e.preventDefault();
        setRating(e.target.value);
    }

    const inputTwo = (e) => {
        e.preventDefault();
        setAmount(e.target.value);
    }

    return(<div className = "moviecard">
        <div className = "top">
            <h1>{props.data.title}</h1>
            <hr/>
            <p style = {{"marginBottom":"10px", "color":"black"}}>{props.data.nmid}</p>
            <p>{props.data.desc}</p>
            {error}
        </div>
        <div className = "bottom">
            <form style = {{"maxWidth":"50%"}}>
                <input type = "text"
                onChange = {inputOne}
                value = {rating}
                placeholder = "rating"/>
                <input type = "text"
                onChange = {inputTwo}
                value = {amount}
                placeholder = "amount"/>
            </form>
            <button className = "custom-btn btn amber black-text" 
                onClick = {handleSubmit}
            >Submit</button>
        </div>
        
        
    </div>)
}