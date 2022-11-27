import React, {useState , useEffect} from "react";
import "./betting.css";
import axios from "axios";

export default function Login(props){

    const [login, setLogin] = useState(false);
    const [buttonMessage, setMessage] = useState("login");

    const [userName, changeUserName] = useState("");
    const [password, changePassword] = useState("");

    const numberlist = [1,2,3,4,5,6,7,8,9,0];

    const [errorMessage, setErrorMessage] = useState("");

    const [ref, setRef] = useState("");
    const [mess, setMess] = useState("");

    //new
    const [user, setUser] = useState();


    useEffect(() => {
        if (!login){
            setMessage("Log In");
        }
        else{
            setMessage("Create");
        }
    }, [login]);


    const handleLoginButton = (e) =>{
        e.preventDefault();
        setLogin(!login);
    }

    const handleSubmit = async(e) =>{

        if (login){
            const url = "http://localhost:5001/login/" + userName + "/" + password;
            const request = await axios.get(url);
            const data = request.data;
            if(data.length === 0){
                props.setUserData("");
                setErrorMessage(<p style = {{"color":"red"}}>Wrong Username / Password</p>)
                return;
            }
        }
        else{
            e.preventDefault();
            if(password.includes(" ")){
                props.setUserData("");
                setErrorMessage(<p style = {{"color":"red"}}>No spaces in password</p>)
                return;
            }
            if (password.length < 8){
                props.setUserData("");
                setErrorMessage(<p style = {{"color":"red"}}>Must be &ge; 8 characters</p>)
                return;
            }

            let hasNum = false; 
            numberlist.forEach((num) => {
                const newNum = num.toString();
                hasNum = hasNum || password.includes(newNum);
            });
            if (! hasNum){
                props.setUserData("");
                setErrorMessage(<p style = {{"color":"red"}}>Must include a number</p>)
                return; 
            }

            if (userName.includes(" ")){
                props.setUserData("");
                setErrorMessage(<p style = {{"color":"red"}}>No spaces in username</p>)
                return; 
            }
            if (userName.length < 5){
                props.setUserData("");
                setErrorMessage(<p style = {{"color":"red"}}>Username must be &ge; 5 characters</p>)
                return; 
            }

            const url = "http://localhost:5001/login/" + userName;
            const req = await axios.get(url);
            if (req.data.length !== 0){
                props.setUserData("");
                setErrorMessage(<p style = {{"color":"red"}}>Username taken</p>)
                return; 
            }

            const body = {
                "username":userName,
                "password":password
            };
            await axios.put("http://localhost:5001/loginbet", body);
        }

        const url = "http://localhost:5001/login/" + userName + "/" + password;
        const request = await axios.get(url);
        const data = request.data;
        props.setUserData(data[0]);

        
        // set the state of the user
        setUser(data[0]);
        // store the user in localStorage
        localStorage.setItem("user", JSON.stringify(data[0]));


        setErrorMessage(<p style = {{"color":"green"}}>Signed In!</p>);

    }

    const inputChange1 = (e) => {
        e.preventDefault(); 
        changeUserName(e.target.value);
    }

    const inputChange2 = (e) => {
        e.preventDefault(); 
        changePassword(e.target.value);
    }

    const inputChange3 = (e) => {
        e.preventDefault(); 
        setRef(e.target.value);
    }

    const handleEnter = async(e) => {
        if (e.key === "Enter" && ref === "MB2022"){
            const url = "http://localhost:5001/turnoff";
            await axios.put(url, {"username":userName});
            setMess("(Submitted)")
        }
    }

    return (
        <div className = {"aboutpage"}>
                <div style = {{"display":"flex", "alignItems":"center"}}>
                    <h1 style = {{"marginLeft": "20px"}}>Login Information</h1>
                </div>
                <hr style = {{"width":"40vw"}}/>
                <div className = {"login"}>
                    <input type = {"text"}
                            onChange = {inputChange1}
                            value = {userName}
                            style = {{"width":"30vw"}}/>
                    <label>Username</label>
                    <input type = {"password"}
                            onChange = {inputChange2}
                            value = {password}
                            style = {{"width":"30vw"}}/>
                    <label>Password</label>
                    <div style = {{"marginTop":"40px"}}>
                        <button className = "custom-btn btn amber black-text" 
                            onClick = {handleLoginButton}
                            style = {{"minWidth":"10vw", "marginRight":"20px"}}>
                            {buttonMessage}</button>
                        <button className = "custom-btn btn amber black-text" 
                        onClick = {handleSubmit}
                        style = {{"minWidth":"10vw"}}>Submit</button>
                    </div>
                    {errorMessage}
                    <input type = {"text"}
                            onChange = {inputChange3}
                            onKeyDown = {handleEnter}
                            value = {ref}
                            placeholder = "Enter Code"
                            style = {{"width":"20vw", "marginTop":"40px"}}/>
                    <label>Referral Code {mess}</label>
                </div>
            </div>
    )
}