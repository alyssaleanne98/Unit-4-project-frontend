import React from "react";
import "./Section.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const Section = ({cards}) => {
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
                {cards}
            </section>


            <section className='footer' id='footer-section'>
              <div className="footer-heading">Get in touch</div> 
              <div className="sub-heading"> I'd love to hear from you! Reach out say hello, provide feedback, or ask for my resume. </div>
              
              <span className="icons">
              <MailOutlineIcon className="email-icon">EMAIL</MailOutlineIcon>
              <LinkedInIcon className="linkedIn-icon">LinkedIn</LinkedInIcon>
              <GitHubIcon className="github-icon">Github</GitHubIcon>
              </span>
            </section>
        </main>
    );
}

export default Section; 