import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import foot from "../Images/bait.png";
// import tele from "../Images/footertele.svg";
import discord from "../Images/discord.svg";
import twitter from "../Images/twitter.svg";
const Footer = () => {
  return (
    <footer className=" text-dark pt-5">
      <Container>
        <a href="https://forms.gle/4ujuyKBGxEydPwKh6" target="_blank">
          {" "}
          <img src={foot} className="groupimg2 mb-3" />
        </a>
        <Row>
          <Nav className="footAdjust">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <Nav.Link href="#Universe">Universe</Nav.Link>
            <Nav.Link href="#Utility">Utility</Nav.Link>
            <Nav.Link href="#Art">Art</Nav.Link>
            <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
          </Nav>
        </Row>
        <hr />
        <Row>
          <div className="text-center footericonadjust">
            <p className="copy my-4">
              Copyright &copy; {new Date().getFullYear()} the BAIT, All
              rights reserved
            </p>
            <Nav className="navicon mb-3">
              <Nav.Link href="#deets" className="md-p-0">
                <a href="https://twitter.com/MiniaturesBTC" target="_blank">
                  <img src={twitter} className="icon" />
                </a>
              </Nav.Link>
              <Nav.Link href="#deets" className="md-p-0">
                <img src={discord} className="icon" />
              </Nav.Link>
            </Nav>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
