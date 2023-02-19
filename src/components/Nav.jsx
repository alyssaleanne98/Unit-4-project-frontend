import React from "react";
import "./Nav.css";
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <div className="container">
            <div className="app-title">
                <h1>Headspace</h1>
                <h3>Better brain health</h3>
            </div>


            <Link activeClass="active" to="about-section" spy={true} duration={400}>
                ABOUT 
            </Link>

            <Link activeClass="active" to="cards-section" spy={true} duration={400}>
                 HEALTH
            </Link>
        </div>



    )
}

export default Nav;

