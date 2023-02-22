import { useState } from "react";
import { useParams, useNavigate } from "react-router";

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
        <div>
            <h1>{card?.title}</h1>
            <p>{card?.description}</p>
            <button id="Delete" onClick={removeCards}>
                Delete
            </button>
        </div>
    )
}

export default Cards 