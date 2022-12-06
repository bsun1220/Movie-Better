import React, {useState} from "react";
import axios from "axios";


export default function EditAccount(props){

    const [account, setAccount] = useState({
        "username":props.user.username,
        "password":props.pw,
        "firstname":props.user.firstname,
        "lastname":props.user.lastname
    });

    const num_list = [0,1,2,3,4,5,6,7,8,9];

    const [error, setError] = useState("");

    const changeUN = (e) => {
        const updatedVal = {"username":e.target.value};
        setAccount(account => ({
            ...account,
            ...updatedVal
        }));
    };

    const changePW = (e) => {
        const updatedVal = {"password":e.target.value};
        setAccount(account => ({
            ...account,
            ...updatedVal
        }));
    };

    const changeFN = (e) => {
        const updatedVal = {"firstname":e.target.value};
        setAccount(account => ({
            ...account,
            ...updatedVal
        }));
    };

    const changeLN = (e) => {
        const updatedVal = {"lastname":e.target.value};
        setAccount(account => ({
            ...account,
            ...updatedVal
        }));
    };

    //Error handling for the account parameters
    const handleSubmit = async(e) => {
        const {username, password, firstname, lastname} = account;
        console.log(username)
        if (password.includes(" ") || username.includes(" ") || firstname.includes(" ") || lastname.includes(" ")){
            setError(<p style = {{"marginTop":"20px", "color":"red"}}>No Spaces in Input</p>)
            return;
        }
        if(password.length < 8){
            setError(<p style = {{"marginTop":"20px", "color":"red"}}>Password must be &ge; 8 characters</p>)
            return;
        }
        if(username.length < 5){
            setError(<p style = {{"marginTop":"20px", "color":"red"}}>Username must be &ge; 5 characters</p>)
            return;
        }

        let hasNum = false; 
        num_list.forEach((num) => {
            const newNum = num.toString();
            hasNum = hasNum || password.includes(newNum);
        });
        if (!hasNum){
            setError(<p style = {{"marginTop":"20px", "color":"red"}}>Password must include a number</p>)
            return; 
        }

        for (let char in firstname){
            if (firstname[char].toLowerCase() === firstname[char].toUpperCase()){
                setError(<p style = {{"marginTop":"20px", "color":"red"}}>Invalid First Name</p>)
                return;
            }
        }
        for (let char in lastname){
            if (lastname[char].toLowerCase() === lastname[char].toUpperCase()){
                setError(<p style = {{"marginTop":"20px", "color":"red"}}>Invalid Last Name</p>)
                return;
            }
        }

        const url = "http://localhost:5001/login/" + username;
        const req = await axios.get(url);
        if (req.data.length !== 0 && props.old_user !== username){
            props.setUser("");
            setError(<p style = {{"marginTop":"20px", "color":"red"}}>Username taken</p>)
            return; 
        }

        const change_url = "http://localhost:5001/accountedit";
        const body = {
            "old_username":props.old_user,
            "username":username,
            "password":password,
            "first":firstname,
            "last":lastname
        }

        await axios.put(change_url, body);
        const new_url = "http://localhost:5001/login/" + username + "/" + password;
        const request = await axios.get(new_url);
        const data = request.data;
        props.setUser(data[0]);

        localStorage.setItem("user", JSON.stringify(data[0]))

        setError(<p style = {{"marginTop":"20px", "color":"green"}}>Account Information Edited!</p>)
    }

    return(
        <div className = "secondarypage" style = {{"paddingBottom":"50px"}}>
            <h1 style = {{"fontWeight":"600", "fontSize":"40px"}}>Edit Account</h1>
            <p style = {{"marginTop":"20px", "marginBottom":"40px"}}>
                Hello {props.user.firstname} {props.user.lastname}!
                Edit {props.user.username}'s ({props.user.uid}) information</p>
            <input type = "text" onChange = {changeUN} value = {account.username}/>
            <label>Change Username</label>
            <input type = "text" onChange = {changePW} value = {account.password}/>
            <label>Change Password</label>
            <input type = "text" onChange = {changeFN} value = {account.firstname}/>
            <label>Change First Name</label>
            <input type = "text" onChange = {changeLN} value = {account.lastname}/>
            <label>Change Last Name</label>
            <button style = {{"marginTop":"40px"}} 
                onClick = {handleSubmit}
                className = "custom-btn btn amber black-text">Submit</button>
            {error}
        </div>
    )
}