import React from "react";
import "./Nav.css";
import { Link } from 'react-scroll';
import { Link as Linker } from "react-router-dom";
// import Create from "../pages/Create";
// import link as linker so it does not conflict with link from 'react-scroll'


const Nav = () => {
    return (
        <div className="container">
            <div className="app-title">
                <h1 className="main-title">Headspace</h1>
                <h3>Better brain health</h3>
            </div>


            <Link className="link-about" activeClass="active" to="about-section" spy={true} duration={600}>
                ABOUT 
            </Link>

            <Link className="link-cards" activeClass="active" to="cards-section" spy={true} duration={600}>
                 HEALTH
            </Link>

            <Linker to ="/cards/create" className="link-cards">
                 CREATE
            </Linker>

            <Link className="link-contact" activeClass="active" to="footer-section" spy={true} duration={600}>
                 CONTACT 
            </Link>
        </div>



    )
}

export default Nav;

