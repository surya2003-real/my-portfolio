import CV from "../assets/img/computerVision.jpg";
import Web3 from "../assets/img/Web3.0.jpg";
import micro from "../assets/img/microelectronics.jpg";
import AI from "../assets/img/AI-ML.jpg";
import webdev from "../assets/img/WebDev.jpg";
import CP from "../assets/img/CP.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import 'animate.css';
import TrackVisibility from "react-on-screen";
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <TrackVisibility>
                            {({ isVisible }) =>
                            <div class="animate__animated animate__rollIn animate_slower">
                            <h2>Skills</h2>
                            <p>I have acquired the following skills through various projects.<br></br>For more information download my CV.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={webdev} alt="Webdev" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={AI} alt="AIML" />
                                    <h5>Artificial Intelligence and Machine Learning</h5>
                                </div>
                                <div className="item">
                                    <img src={CP} alt="CP" />
                                    <h5>Competitive Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={CV} alt="CV" />
                                    <h5>Computer Vision</h5>
                                </div>
                                <div className="item">
                                    <img src={Web3} alt="Web3" />
                                    <h5>Web 3.0</h5>
                                </div>
                                <div className="item">
                                    <img src={micro} alt="electronics" />
                                    <h5>Microelectronics</h5>
                                </div>
                            </Carousel>
                                <LinkContainer to="/contact"><Button variant="primary" size="lg" id='btn'>
                                    Link to CV
                                </Button>
                                </LinkContainer>
                            </div>}
                            </TrackVisibility>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="backg" />
        </section>
    );
}

export default Skills;