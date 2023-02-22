import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import Index from "../pages/Index/Index";
import Show from "../pages/Show/Show";
import Create from "../pages/Create/Create";
import Card from "../components/Card"




const URL = "http://localhost:8000/cards/";

export default function Main() {
    const [cards, setCards] = useState(null);


    //Index
    const getCards = async () => {
        const response = await fetch(URL)
        console.log(response)
        const data = await response.json()
        console.log(data)
        setCards(data);
    };

    //Create 
    const createCards = async (card) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(card),
        });
        getCards();
    };

    //Delete
    const deleteCards = async (id) => {
        await fetch(URL + id, {method: "DELETE"});
        getCards();
    };

    //UPDATE
    const updateCards = async (card, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(card),
        });
        getCards();
    }


    useEffect(() => {
        getCards()
        console.log(cards)
    },[])

    return (
        <main>
            <Routes>
                <Route
                    path="/" 
                    element={<Index 
                    cards={cards} />}
                />

                <Route
                    path="/cards/:id"
                    element={
                        <Show
                            cards={cards}
                            deleteCards={deleteCards}
                            updateCards={updateCards}
                        />
                    }
                />
            </Routes>
        </main>
    );
}         