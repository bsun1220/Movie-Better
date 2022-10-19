import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";
import GenreEndpoint from "./genreendpoint";
import RatingEndpoint from "./ratingendpoint";
import HomePage from "./components/homepage/home";
import DataVisPage from "./components/datavisual/datavispage";
import TopMovies from "./topmovies";
import Actor from "./components/recentmovies/actor.js";
import Director from "./components/recentmovies/director.js";
const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/genreendpoint" element = {<GenreEndpoint/>}/>
                <Route exact path = "/rating" element = {<RatingEndpoint/>}/>
                <Route exact path = "/" element = {<HomePage/>}/>
                <Route exact path = "/datavis" element = {<DataVisPage/>}/>
                <Route exact path = "/topmovies" element = {<TopMovies/>}/>
                <Route exact path = "/recentmovies/actor" element = {<Actor/>}/>
                <Route exact path = "/recentmovies/director" element = {<Director/>}/>
            </Routes>
        </div>
    );
   };
export default App;