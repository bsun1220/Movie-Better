import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";
import GenreEndpoint from "./genreendpoint";
// import FakeElement from "./FakeElement";
import RatingEndpoint from "./ratingendpoint";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/genreendpoint" element = {<GenreEndpoint/>}/>
                <Route exact path = "/rating" element = {<RatingEndpoint/>}/>
                {/* <Route exact path = "/endpoint2" element = {<FakeElement/>}/> */}
            </Routes>
        </div>
    );
   };
export default App;