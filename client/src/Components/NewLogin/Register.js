import React, {useState , useEffect} from "react";
import "../Betting/betting.css";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Register(props){


    const [userName, changeUserName] = useState("");
    const [password, changePassword] = useState("");

    const numberlist = [1,2,3,4,5,6,7,8,9,0];

    const [errorMessage, setErrorMessage] = useState("");

    const [ref, setRef] = useState("");
    const [mess, setMess] = useState("");

    const[check,setCheck]= useState(true)

    //new
    const [user, setUser] = useState();



  // const handleLoginButton = (e) =>{
  //     e.preventDefault();
  //     setLogin(!login);
  // }

  const handleSubmit = async(e) =>{

        if(password.includes(" ")){
            // props.setUserData("");
            setCheck(false)
            setErrorMessage(<p style = {{"color":"red"}}>No spaces in password</p>)
            return;
        }
        if (password.length < 8){
            // props.setUserData("");
            setCheck(false)
            setErrorMessage(<p style = {{"color":"red"}}>Must be &ge; 8 characters</p>)
            return;
        }

        let hasNum = false; 
        numberlist.forEach((num) => {
            const newNum = num.toString();
            hasNum = hasNum || password.includes(newNum);
        });
        if (! hasNum){
            // props.setUserData("");
            setCheck(false)
            setErrorMessage(<p style = {{"color":"red"}}>Must include a number</p>)
            return; 
        }

        // console.log("has spaces")
        // console.log(userName.includes(" "))
        if (userName.includes(" ")){
            // props.setUserData("");
            setCheck(false)
            setErrorMessage(<p style = {{"color":"red"}}>No spaces in username</p>)
            return; 
        }
        if (userName.length < 5){
            // props.setUserData("");
            setCheck(false)
            setErrorMessage(<p style = {{"color":"red"}}>Username must be &ge; 5 characters</p>)
            return; 
        }

        const url = "http://localhost:5001/login/" + userName;
        const req = await axios.get(url);
        // console.log("this is the req")
        // console.log(req)
        if (req.data.length !== 0){
          console.log("user taken")
            // props.setUserData("");
            setCheck(false)
            setErrorMessage(<p style = {{"color":"red"}}>Username taken</p>)
            return; 
        }

    setCheck(true)

    console.log("noerrors present")
    console.log(check)
    
    if(check){
    

      const body = {
        "username":userName,
        "password":password
    };
    await axios.put("http://localhost:5001/loginbet", body);

    const url2 = "http://localhost:5001/login/" + userName + "/" + password;
    const request = await axios.get(url2);
    const data = request.data;

    // set the state of the user
    setUser(data[0]);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(data[0]));

    setErrorMessage(<p style = {{"color":"green", "fontSize":"50px"}}>Registered and Signed In!</p>);
    }

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
      <div className="container" >
        
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="custom-btn btn white black-text" >
               Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
          
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
                        onClick = {handleSubmit}
                        style = {{"minWidth":"10vw"}}>Register</button>
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
        </div>
      </div>
    );
  
}
