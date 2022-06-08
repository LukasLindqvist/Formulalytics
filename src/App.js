import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import Result from "./Pages/Result";
import ErrorPage from "./Pages/ErrorPage"
function App(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/results" element={<Result/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
    )
}

export default App;