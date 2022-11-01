import React from "react";
import { Route, Routes} from "react-router-dom";
import DataVisPage from "./Components/DataVis/datavispage";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Components/Home/home";
import BettingPage from "./Components/Betting/BettingPage";
import AccountPage from "./Components/Accounts/AccountPage";

import "./Public/Styles/index.css"
import "./Public/Styles/widget.css"
import "./Public/Styles/general.css"

const App = () => {
    return (
        <div>
            <nav className="nav-center z-depth-0" role="navigation" style = {{"backgroundColor":"aliceblue"}}>
                <div className="center-align nav-wrapper container">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/betting">Betting</a></li>
                        <li><a href="/search">Encylopedia</a></li>
                        <li><a href="/datavis">DataVis</a></li>
                        <li><a href="/accounts">Accounts</a></li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route exact path = "/" element = {<HomePage/>}/>
                <Route exact path = "/betting" element = {<BettingPage/>} />
                <Route exact path = "/search" element = {<SearchPage/>} />
                <Route exact path = "/datavis" element = {<DataVisPage/>}/>
                <Route exact path = "/accounts" element = {<AccountPage/>}/>
            </Routes>
        </div>
    );
   };
export default App;