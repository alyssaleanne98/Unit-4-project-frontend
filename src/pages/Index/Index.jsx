// import Card from "./components/Card";
import { Link } from "react-router-dom"
import Component from "../../components/Card"
import "../../components/Section.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Index({ cards }) {

    // Loaded function
    const loaded = () => {
        return cards.map((card) => {
            console.log(card.id)
            return (
                <Component
                key={card.id}
                title={card.title}
                description={card.description}
                id={card.id}
                />
            );
        });
    }

    const loading = () => {
        return <h1> Loading... </h1>
    }

    return (
        <>
            <main>

            <section className="diagram" id='image-section'
            //  data-scroll //This attribute makes this section an independent scrollable container
            //  data-scroll-speed="9"
            //  data-scroll-section
            >
                <img className="brain-diagram" src="https://mhanational.org/sites/default/files/Picture1_0.png" ></img>
            </section>


            <section className='about' id='about-section'>
                <h2 className="heading">THE HUMAN BRAIN EXPLAINED:</h2>
                {/* <p>BY ALYSSA CERVANTES</p>
                <p className="paragraph">The brain is an incredible yet mysterious three-pound organ that controls all functions of the body, interprets information from the outside world, and embodies the essence of the mind and soul.</p> */}
            </section>


            <section className='cards' id='cards-section'>
            {cards ? loaded() : loading()}
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
        </>


    ) 
}



export default Index;

 // <div className="all-cards">
            //     <div key={card._id} className="card">
            //             <h2>{card.title}</h2>
            // //             <p>{card.description}</p>
            //     </div>
            // </div>