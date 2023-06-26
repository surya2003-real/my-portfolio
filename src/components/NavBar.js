import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const name = "Suryansh Goel";
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="namelogo">{name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
              <Nav.Link href="/skills" className="navbar-link">Skills</Nav.Link>
              <Nav.Link href="/projects" className="navbar-link">Projects</Nav.Link>
              <Nav.Link href="/contact" className="navbar-link">Connect</Nav.Link>
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
    </Router>
  )
}
 
export default NavBar;