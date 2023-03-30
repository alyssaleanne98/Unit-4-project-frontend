import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./Show.css";

const Cards = ({ cards, updateCards, deleteCards }) => {
    const { id } = useParams();
    const card = cards?.find((element) => element.id === parseInt(id));
    const navigate = useNavigate();

    const [editForm, setEditForm] = useState(card);

    const handleChange = (evt) => {
        setEditForm({
            ...editForm,
            [evt.target.name]: evt.target.value,
        });
    };

    const removeCards = () => {
        deleteCards(id);
        navigate("/cards");
    };

    return (
        <div className="cards-show-container">
            <h1 className="cards-show-title">{card?.title}</h1>
            <p className="cards-show-desc">{card?.description}</p>
            <button id="Delete" onClick={removeCards}>
                Delete
            </button>
        </div>
    )
}

export default Cards 