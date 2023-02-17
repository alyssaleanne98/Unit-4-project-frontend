import React from "react";
import "./Section.css"

const Section = () => {
    return (
        <main>
            <section className='about'>
                <h1>This is the about section</h1>
            </section>

            <section className='flashcards'>
                <h1>This is the flashcard section</h1>
            </section>

            <section className='footer'>
                <h1>This is the footer section</h1>
            </section>
        </main>
    );
}

export default Section; 