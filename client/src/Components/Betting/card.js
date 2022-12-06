import React, {useState} from "react";
import axios from "axios";

export default function MovieCard(props){
    
    const [rating, setRating] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault(); 
        if (props.user === ""){
            setError(<p style = {{"marginTop":"10px","color":"red"} }>Not Logged In</p>)
            return;
        }
        let rating_num = parseFloat(rating);
        let amount_num = parseFloat(amount);

        rating_num = Math.round(rating_num * 10)/10;
        amount_num = Math.round(amount_num * 100)/100;

        if(isNaN(rating_num) || isNaN(amount_num)){
            setError(<p style = {{"marginTop":"10px","color":"red"} }>Invalid Input</p>)
            return; 
        }

        if(rating_num < 0 || rating_num > 10 || amount_num <= 0){
            setError(<p style = {{"marginTop":"10px","color":"red"} }>Invalid Input</p>)
            return; 
        }
        if(props.user.balance < amount){
            setError(<p style = {{"marginTop":"10px","color":"red"} }>Not Enough Money</p>)
            return; 
        }
        const check_url = "http://localhost:5001/getbet/" + props.user.uid + "/" + props.data.nmid + "/" + rating;
        const check = await axios.get(check_url);
        const check_data = check.data;

        if (check_data.length !== 0){
            setError(<p style = {{"marginTop":"10px","color":"red"} }>Already Bet on Rating. Edit Size in My Accounts</p>)
            return; 
        }
        
        const req_body = {
            "uid":props.user.uid,
            "nmid":props.data.nmid,
            "amount":amount,
            "rating":rating
        };
        await axios.put("http://localhost:5001/setbet", req_body);


        const body = {
            "username":props.user.username,
            "amount":amount
        }
        await axios.put("http://localhost:5001/balance", body);

        const url = "http://localhost:5001/login/" + props.user.username;
        const request = await axios.get(url);
        const data = request.data[0];

        setError(<p style = {{"marginTop":"10px","color":"green"} }>
            You successfully put ${amount_num} on {rating_num}
        </p>);

        localStorage.setItem("user", JSON.stringify(data))
        props.setUser(data);

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