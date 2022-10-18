import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointTwo from "./endpoint2";
import EndPointOne from "./endpoint1";
import RatingEndpoint from "./ratingendpoint";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint2" element = {<EndPointTwo/>}/>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/rating" element = {<RatingEndpoint/>}/>
            </Routes>
        </div>
    );
   };
export default App;