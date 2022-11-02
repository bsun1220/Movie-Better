import React, {useEffect, useState} from "react";
import axios from "axios";
import "./accounts.css"

export default function BetEdit(props){

    const [movieName, setName] = useState("");
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const onChange = (e) =>{
        e.preventDefault();
        setInput(e.target.value);
    }

    useEffect(() => {
        const func = async() => {
            const url = "http://localhost:5001/betmovieid/" + props.data.nmid;
            const request = await axios.get(url);
            const data = request.data;
            setName(data[0].title);
        };
        func();
    }, [props.data.nmid]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const val = parseFloat(input);
        if (isNaN(val)){
            setError(<p style = {{"color":"red"}}>Invalid Input</p>)
            return;
        }
        if(val <= 0){
            setError(<p style = {{"color":"red"}}>Invalid Input</p>)
            return;
        }
        const amount = Math.round(val * 100)/100;
        console.log(props.user.balance);
        if(props.user.balance < amount){
            setError(<p style = {{"color":"red"}}>Not Enough Money</p>)
            return;
        }

        let url = "http://localhost:5001/editbet/";
        url = url + props.user.uid + "/" + props.data.nmid + "/" + props.data.rating + "/" + amount;
        await axios.put(url);

        const new_url = "http://localhost:5001/login/" + props.user.username;
        const request = await axios.get(new_url);
        const data = request.data;

        props.setUserData(data[0]);
        props.setChange(! props.change);
        setError(<p style = {{"color":"green"}}>Bet Adjusted!</p>)

    }

    return(
        <div className = {"index"}>
            <h1>Bet #{props.index}</h1>
            <hr/>
            <p>You invested ${props.data.amount} on {props.data.rating} for {movieName}</p>
            <div className = "submitform">
                <input type = "text"
                    placeholder = "add additional"
                    value = {input}
                    onChange = {onChange}
                    style = {{"width":"60%"}}/>
                <button style = {{"marginLeft":"15px"} }
                    onClick = {handleSubmit}
                    className = {"custom-btn-two waves-effect btn blue-grey"}>Submit</button>
            </div>
            {error}
        </div>
    )
}