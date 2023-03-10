// import Card from "./components/Card";
// import { Link } from "react-router-dom"
import Component from "../../components/Card"
import "./Index.css"
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
                    data-scroll //This attribute makes this section an independent scrollable container
                    data-scroll-speed="2"
                    data-scroll-section
                >

                    <img className="brain-diagram" src="https://mhanational.org/sites/default/files/Picture1_0.png" ></img>
                </section>


                <section className='about' id='about-section'>
                    <div className="sub-section"> 
                        <h2 className="heading">KNOW YOUR BRAIN:</h2>
                        <p className="p-content">The human brain is the command center for the human nervous system -- containing billions of nerve cells that coordinate emotion, behavior, thought, movement, and sensation, breathing, vision, temperature, and basically every process that regulates our body. How does the brain work? Different parts of your brain have different functions:</p>
                        
                        <div className="card-functions">
                            <h3 className="card-functions-one">The cerebrum</h3>
                            <p className="card-paragraph">paragraph</p>
                        </div>

                        <div className="card-functions">
                            <h3 className="card-functions-two">The cerebellum</h3>
                            <p className="card-paragraph">paragraph</p>
                        </div>

                        <div className="card-functions">
                            <h3 className="card-functions-three">The brain stem</h3>
                            <p className="card-paragraph">paragraph</p>
                        </div>
                        
                    </div>
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

