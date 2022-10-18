import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";
import GenreEndpoint from "./genreendpoint";
import RatingEndpoint from "./ratingendpoint";
import HomePage from "./components/homepage/home";
import DataVisPage from "./components/datavisual/datavispage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/genreendpoint" element = {<GenreEndpoint/>}/>
                <Route exact path = "/rating" element = {<RatingEndpoint/>}/>
                <Route exact path = "/" element = {<HomePage/>}/>
                <Route exact path = "/datavis" element = {<DataVisPage/>}/>
            </Routes>
        </div>
    );
   };
export default App;