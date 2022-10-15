import React from "react";
import { Route, Routes} from "react-router-dom";
import EndPointOne from "./endpoint1";

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path = "/endpoint1" element = {<EndPointOne/>}/>
            </Routes>
        </div>
    );
   };
export default App;