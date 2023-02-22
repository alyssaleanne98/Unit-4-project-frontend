import "./Create.css"
import { useState } from "react"


const Create = ({cards, createCards}) => {
    const [form, setForm] = useState ({
        title: "",
        description: "",
    });

    const handleChange = (evt) => {
        setForm({
            ...form,
            [evt.target.title]: evt.target.value,
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

    // loaded function
    const loaded = () => {
        return cards.map((card) => (
            <div key={card._id} className="card">
                <h1>{card.title}</h1>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
      }


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={form.title}
                title="title"
                placeholder="title"
                onChange={handleChange}
                />

                <input type ="submit" value="Create Flashcard" />
            </form>
            {cards ? loaded() : loading()} 
        </section>
    )
}

export default Create;