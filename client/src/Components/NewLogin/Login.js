import React, {useState , useEffect, useContext} from "react";
import "../Betting/betting.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserProvider,UserContext } from '../../UserContext';



export default function NewLogin(props){

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

    // const{user, setUserData} = useContext(UserContext);

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

        const url = "http://localhost:5001/login/" + userName + "/" + password;
        const request = await axios.get(url);
        const data = request.data;
        console.group("the data entered")
        console.log(data)
        if(data.length === 0){
            setUser("");
            setErrorMessage(<p style = {{"color":"red"}}>Wrong Username / Password</p>)
            return;
        }

    // set the state of the user
    setUser(data[0]);
    // console.log("consoled")
    // console.log(user)
   
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(data[0]));


    setErrorMessage(<p style = {{"color":"green", "fontSize":"50px"}}>Logged In!</p>);

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
            <br></br>
            <Link to="/" className="custom-btn btn white black-text" >
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="1 0 16 10">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              
              Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
              Don't have an account? <Link to="/register">Register</Link>
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
                        style = {{"minWidth":"10vw"}}>Login</button>
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