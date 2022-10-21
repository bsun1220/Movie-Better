import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";
import EndPointEsha from "./endpointesha";

import GenreEndpoint from "./genreendpoint";
import RatingEndpoint from "./ratingendpoint";
import HomePage from "./components/homepage/home";
import DataVisPage from "./components/datavisual/datavispage";
import TopMovies from "./topmovies";
const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/endpointesha" element = {<EndPointEsha/>}/>
                <Route exact path = "/genreendpoint" element = {<GenreEndpoint/>}/>
                <Route exact path = "/rating" element = {<RatingEndpoint/>}/>
                <Route exact path = "/" element = {<HomePage/>}/>
                <Route exact path = "/datavis" element = {<DataVisPage/>}/>
                <Route exact path = "/topmovies" element = {<TopMovies/>}/>
            </Routes>
        </div>
    );
   };
export default App;