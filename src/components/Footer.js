import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const name = "Suryansh Goel";
const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="namelogo">
            {name}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/suryansh-goel-0194b424b/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/profile.php?id=100086898699551"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/suryanshgoel6/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Footer;