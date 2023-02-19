import React from "react";
import "./Section.css"


const Section = () => {
    return (
        <main>
            
            <section className="diagram" id='image-section'
            //  data-scroll //This attribute makes this section an independent scrollable container
            //  data-scroll-speed="9"
            //  data-scroll-section
            >
                <img className="brain-diagram"src="https://mhanational.org/sites/default/files/Picture1_0.png" ></img>
            </section>


            <section className='about' id='about-section'>
                <h2 className="heading">THE HUMAN BRAIN EXPLAINED:</h2>
                {/* <p>BY ALYSSA CERVANTES</p>
                <p className="paragraph">The brain is an incredible yet mysterious three-pound organ that controls all functions of the body, interprets information from the outside world, and embodies the essence of the mind and soul.</p> */}
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