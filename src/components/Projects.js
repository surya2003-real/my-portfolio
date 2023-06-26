import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img3.png";
import web3 from "../assets/img/Web3.0.jpg";
import webdev from "../assets/img/WebDev.jpg";
import matht from "../assets/img/MathematicalTrading.jpg";
import coursehelp from "../assets/img/coursehelp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "Web3.0",
      description: "Blockchain & Cryptocurrency",
      GithubLink: "https://github.com/Mastering-Web3/assignment-3a-surya2003-real",
      imgUrl: web3,
    },
    {
      title: "Mathematical Trading Strategies",
      description: "Algorithmic Trading",
      GithubLink: "https://github.com/surya2003-real/Mathematical-Trading-Strategies",
      imgUrl: matht,
    },
    {
      title: "Web Development",
      description: "Frontend & Backend",
      GithubLink: "https://github.com/surya2003-real/my-portfolio",
      imgUrl: webdev,
    },
    {
      title: "Solve for IITK",
      description: "CourseHelp Website",
      GithubLink: "https://github.com/surya2003-real/IITK-Course-Guide",
      imgUrl: coursehelp,
    },
    {
      title: "Clickbait Generator",
      description: "NLP & API",
      GithubLink: "https://github.com/surya2003-real/clickbait-generator-website",
      imgUrl: projImg1,
    },
    {
      title: "Static Site generator",
      description: "Building my own SSG from scratch",
      GithubLink: "https://github.com/surya2003-real/static-site-generator",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are few of my projects. 
                  Hover over the cards to see the project description 
                  and click on them to visit the Github repository.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg"></img>
    </section>
  )
}

export default Projects;