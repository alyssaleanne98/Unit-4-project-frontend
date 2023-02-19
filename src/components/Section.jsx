import React from "react";
import "./Section.css"


const Section = () => {
    return (
        <main>
            <section className="diagram" id='image-section'
             data-scroll //This attribute makes this section an independent scrollable container
             data-scroll-speed="9"
             data-scroll-section
            >
                <img className="brain-diagram"src="https://mhanational.org/sites/default/files/Picture1_0.png" ></img>
            </section>


            <section className='about' id='about-section'>
                <h1>this is the about section</h1>
            </section>


            <section className='cards' id='cards-section'>
                <h1>This is the flashcard section</h1>
            </section>


            <section className='footer' id='footer-section'>
                <h1>This is the footer section</h1>
            </section>
        </main>
    );
}

export default Section; 