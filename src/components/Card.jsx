import React from "react"
import { Link } from "react-router-dom";



function Card ({ card, title, description, id}) {
    return (
        <div className="cards">
            <Link className="link" to={`/cards/:id`}>
                <p className="cards-title"> {title} </p>
                <p className="cards-desc"> {description}</p>
            </Link>

        </div>
    )
}

export default Card; 