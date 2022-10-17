import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";
import FakeElement from "./FakeElement";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
                <Route exact path = "/endpoint2" element = {<FakeElement/>}/>
            </Routes>
        </div>
    );
   };
export default App;