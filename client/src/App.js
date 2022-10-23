import React from "react";
import { Route, Routes} from "react-router-dom";
import TitleSearch from "./Pages/TitleSearch";
import GenreSelect from "./Pages/GenreSelect";
import GenreSearch from "./Pages/GenreSearch";
import RatingSearch from "./Pages/RatingSearch";
import HomePage from "./Pages/HomePage";
import DataVisPage from "./Components/DataVis/datavispage";
// import TopMovies from "./Components/Misc/topmovies";
import ActorSearch from "./Pages/ActorSearch.js";
import DirectorSearch from "./Pages/DirectorSearch.js";
import TimeSearch from "./Pages/TimeSearch.js";

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
                        <li><a href="/search/title">Title</a></li>
                        <li><a href="/search/genre">Genre</a></li>
                        <li><a href="/search/rating">Rating</a></li>
                        <li><a href="/search/actor">Actor</a></li>
                        <li><a href="/search/director">Director</a></li>
                        <li><a href="/search/time">Time</a></li>
                        <li><a href="/select/genre">Select</a></li>
                        <li><a href="/datavis">Data Vis</a></li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route exact path = "/" element = {<HomePage/>}/>
                <Route exact path = "/search/title" element = {<TitleSearch/>}/>
                <Route exact path = "/search/genre" element = {<GenreSearch/>}/>
                <Route exact path = "/search/rating" element = {<RatingSearch/>}/>
                <Route exact path = "/search/actor" element = {<ActorSearch/>}/>
                <Route exact path = "/search/director" element = {<DirectorSearch/>}/>
                <Route exact path = "/search/time" element = {<TimeSearch/>}/>
                <Route exact path = "/select/genre" element = {<GenreSelect/>}/>
                <Route exact path = "/datavis" element = {<DataVisPage/>}/>
                

                {/* No Longer Needed */}

                {/* <Route exact path = "/topmovies" element = {<TopMovies/>}/> */}
            </Routes>
        </div>
    );
   };
export default App;