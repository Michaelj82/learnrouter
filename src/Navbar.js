import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import './style.css'
const Navbar = () => {
    return(
            <div className="nav">
                <a  className="title"> Learning Router</a>
                <ul className="links">
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/">App</a></li>

                </ul>
            </div>
    )
}

export default Navbar;