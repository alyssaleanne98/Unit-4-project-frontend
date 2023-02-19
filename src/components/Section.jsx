import React from "react";
import "./Section.css"


const Section = () => {
    return (
        <main>

            <section className='about' id='about-section'
                data-scroll //This attribute makes this section an independent scrollable container
                data-scroll-speed="9"
                data-scroll-section
                >
                <h1>This is the about section</h1>
            </section>

            <section className='cards' id='cards-section'>
                <h1>This is the flashcard section</h1>
            </section>

            <section className='footer'>
                <h1>This is the footer section</h1>
            </section>
        </main>
    );
}

export default Section; 