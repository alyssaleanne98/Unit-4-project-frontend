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

    // loaded function
    const loaded = () => {
        return cards.map((card) => (
            <>

            <div key={card.id} className="card">
                <h1>{card.title}</h1>
            </div>

                </>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
      }


    return (
        <>
            {cards ? loaded() : loading()} 
            <section>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        value={form.title}
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                    />
                    {/* had to have this according to your form */}
                        <input
                        type="text"
                        value={form.description}
                        name="description"
                        placeholder="description"
                        onChange={handleChange}
                        />
        
                        <input type ="submit" value="Create Flashcard" />
                    </form>

                </section>

        </>

    )
}

export default Create;