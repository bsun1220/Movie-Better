import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";
import EndPointTwo from "./endpoint2";
import EndPointThree from "./endpoint3";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/endpoint2" element = {<EndPointTwo/>}/>
                <Route exact path = "/endpoint3" element = {<EndPointThree/>}/>
            </Routes>
        </div>
    );
   };
export default App;