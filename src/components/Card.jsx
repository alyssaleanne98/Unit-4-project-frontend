import React from "react"
import { Link } from "react-router-dom";
import "./Card.css";
import 'animate.css'



function Component({ title, description, id }) {
    return (
        <div className="flex">
            <Link className="link" to={`/cards/${id}`}>
                <div className="cards-container">
                    <p className="cards-title"> {title} </p>
                    <p className="cards-desc"> {description}</p>
                    <div className="btn-icon">Read More </div>
                </div>
            </Link>

        </div>
    )
}

export default Component;


// line 11: forgot to add $ before {}