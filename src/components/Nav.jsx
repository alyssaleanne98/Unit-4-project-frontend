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


            <Link className="link-about" activeClass="active" to="about-section" spy={true} duration={400}>
                ABOUT 
            </Link>

            <Link className="link-cards" activeClass="active" to="cards-section" spy={true} duration={400}>
                 HEALTH
            </Link>

            <Link className="link-contact" activeClass="active" to="footer-section" spy={true} duration={400}>
                 Contact us
            </Link>
        </div>



    )
}

export default Nav;

