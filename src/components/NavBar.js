import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {

  const name = "Suryansh Goel";

  return (
    <Navbar expand="md">
      <Container fluid>
        <LinkContainer to="/"><Navbar.Brand className="namelogo">{name}</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/"><Nav.Link className="navbar-link">Home</Nav.Link></LinkContainer>
            <LinkContainer to="/skills"><Nav.Link className="navbar-link">Skills</Nav.Link></LinkContainer>
            <LinkContainer to="/projects"><Nav.Link className="navbar-link">Projects</Nav.Link></LinkContainer>
            <LinkContainer to="/contact"><Nav.Link className="navbar-link">Contact</Nav.Link></LinkContainer>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/suryansh-goel-0194b424b/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/profile.php?id=100086898699551"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/suryanshgoel6/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;