import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index({ cards, createCards }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
    });

    const handleChange = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        createCards(form);
        setForm({
            title: "",
            description: "",
        });
    };

    //loaded function
    const loaded = () =>
        cards.map((card) => (
            <div key={card.id} className="card">
                <Link to={`/cards/${card.id}`}>
                    <h1>{card.title}</h1>
                </Link>
                <h3>{card.description}</h3>
            </div>
        ));

    const loading = () => <h1>Loading</h1>;

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={form.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="description"
                    value={form.image}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />

            </form>
            {cards ? loaded() : loading()}
        </section>
    )


}