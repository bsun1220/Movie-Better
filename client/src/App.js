import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";
import RatingEndpoint from "./ratingendpoint";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/rating" element = {<RatingEndpoint/>}/>
            </Routes>
        </div>
    );
   };
export default App;