import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3" >ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row> 
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Piyush Saini.</strong>
                <br />I am a junior at the University of Rochester studying Computer Science and Mathematics.
                <br /> I am passionate about software engineering and would like to bring my technical skills and a problem-solving mindset to the tech industry.
                <br/>
                I thrive in fast-paced and collaborative environments and have gained professional skills while working as software engineering intern at HCL technologies and Human-Computer interaction Lab. 
                <br/>
                I am curreclty working with HCI department of my university as a software developer and improving my skills as a programmer, a problem solver, and a researcher.
              
                <br />I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products. Don't forget to check out my Tech Stack and Projects.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's Connect
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1k0NPNKC3hakNiMfQfj0RUGn8NCyEhOoD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/sainipiyush79" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/psaini2/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
