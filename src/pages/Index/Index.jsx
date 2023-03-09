// import Card from "./components/Card";
import { Link } from "react-router-dom"
import Component from "../../components/Card"


function Index({ cards }) {
    console.log(cards)
    console.log("hello")

    // Loaded function
    const loaded = () => {
        return cards.map((card) => {
            console.log(card._id)
            return (
                <Component
                title={card.title}
                description={card.description}
                id={card._id}
                />
            );
        });
    }

    const loading = () => {
        return <h1> Loading... </h1>
    }

    return cards ? loaded() : loading()
}



export default Index;

 // <div className="all-cards">
            //     <div key={card._id} className="card">
            //             <h2>{card.title}</h2>
            // //             <p>{card.description}</p>
            //     </div>
            // </div>