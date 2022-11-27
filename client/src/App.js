import React, {useContext, useState} from "react";
import { Route, Routes} from "react-router-dom";
import DataVisPage from "./Components/DataVis/datavispage";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Components/Home/home";
import BettingPage from "./Components/Betting/BettingPage";
import AccountPage from "./Components/Accounts/AccountPage";
import Register from "./Components/NewLogin/Register";
import Login from "./Components/NewLogin/Login";
import Bettors from "./Components/Bettors/BettorPage";
import { Link } from "react-router-dom";
import { UserProvider,UserContext } from './UserContext';
import "./Public/Styles/index.css"
import "./Public/Styles/widget.css"
import "./Public/Styles/general.css"


function App  () {
    // const{user, setUserData} = useContext(UserContext);
   const [user, setUserData] = useState(JSON.parse(localStorage.getItem("user")));
   const Themedbutton=()=>{
    console.log("hi")
    console.log(user)

    if(!user){
        return(
            <Link to="/login" className="custom-btn btn amber black-text">
                        Login </Link>
        )
    }
    else{
        return(
            <button className = "custom-btn btn red black-text" 
                            onClick = {handleLogout}
                        > Logout
                           </button>
        )
    }
}
const handleLogout = () => {
    localStorage.clear();
    setUserData()
  };

    return (
        <div>
             {/* <UserContext.Provider value={user}> */}
            <nav className="nav-center z-depth-0" role="navigation" style = {{"backgroundColor":"aliceblue"}}>
                <div className="center-align nav-wrapper container">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/search">Encyclopedia</a></li>
                        <li><a href="/betting">Betting</a></li>
                        <li><a href="/datavis">DataVis</a></li>
                        <li><a href="/accounts">Account</a></li>
                        <li><a href="/bettors">Bettors</a></li>
                        {/* <Link to="/login" className="custom-btn btn amber black-text">
                        Login </Link> */}
                        <Themedbutton></Themedbutton>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route exact path = "/" element = {<HomePage/>}/>
                <Route exact path = "/betting" element = {<BettingPage/>} />
                <Route exact path = "/search" element = {<SearchPage/>} />
                <Route exact path = "/datavis" element = {<DataVisPage/>}/>
                <Route exact path = "/accounts" element = {<AccountPage/>}/>
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/bettors" element={<Bettors/>} />
            </Routes>
            {/* </UserContext.Provider> */}
        </div>
    );
   };
   


export default App;