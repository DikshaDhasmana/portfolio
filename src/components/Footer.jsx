import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';
import navIcon3 from '../assets/img/navIcon3.svg';
import navIcon4 from '../assets/img/navIcon4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/diksha-sharma-1650b1258/'><img src={navIcon1} alt="icon"/></a>
              <a href='https://x.com/DikshaDhasmana'><img src={navIcon2} alt="icon"/></a>
              <a href='https://www.instagram.com/diksha_dhasmana/'><img src={navIcon3} alt="icon"/></a>
              <a href='https://github.com/DikshaDhasmana'><img src={navIcon4} alt="icon"/></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}