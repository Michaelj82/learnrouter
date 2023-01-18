import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./About";
import App from "./App";
import Contact from "./Contact";
import Navbar from "./Navbar";
const RouteSwitch = () =>{

    return(
        <BrowserRouter>
        <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<App></App>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;