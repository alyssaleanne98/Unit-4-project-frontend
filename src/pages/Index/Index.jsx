// import Card from "./components/Card";
import { Link } from "react-router-dom"


function Index({ cards }) {

    // Loaded function
    const loaded = () => {
        return cards.map((card) => (
            <div className="all-cards">
                <div key={card._id} className="card">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            </div>
        ))
    }

    const loading = () => {
        return <h1> Loading... </h1>
    }

    return cards ? loaded() : loading()
}



export default Index;