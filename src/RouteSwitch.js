import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App></App>}></Route>
                <Route path="/profile" element={<Profile></Profile>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch