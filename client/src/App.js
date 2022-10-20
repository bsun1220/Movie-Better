import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";
import EndPointTwo from "./endpoint2";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/endpoint2" element = {<EndPointTwo/>}/>
            </Routes>
        </div>
    );
   };
export default App;