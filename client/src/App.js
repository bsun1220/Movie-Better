import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";
import EndPointEsha from "./endpointesha";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/endpointesha" element = {<EndPointEsha/>}/>
            </Routes>
        </div>
    );
   };
export default App;