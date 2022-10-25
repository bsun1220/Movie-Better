import React from "react";
import { Route, Routes} from "react-router-dom";
import DataVisPage from "./Components/DataVis/datavispage";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Components/Home/home";

import "./Public/Styles/index.css"
import "./Public/Styles/widget.css"
import "./Public/Styles/general.css"

const App = () => {
    return (
        <div>
            <nav class="nav-center amber z-depth-0" role="navigation">
                <div class="center-align nav-wrapper container">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/search">Encylopedia</a></li>
                        <li><a href="/datavis">DataVis</a></li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route exact path = "/" element = {<HomePage/>}/>
                <Route exact path = "/search" element = {<SearchPage/>} />
                <Route exact path = "/datavis" element = {<DataVisPage/>}/>
            </Routes>
        </div>
    );
   };
export default App;