import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 10 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
              
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Software Engineer | Human Computer Interaction Lab</strong>
                    <br/>
                    <strong>Employer:</strong> University of Rochester
                    <br/>
                    <strong>Duration:</strong> July 2020 - Present
                    <br/>
                    
                    
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
              
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Teaching Assistant | Data Structures and Algorithms  </strong>
                    <br/>
                    <strong>Employer:</strong> University of Rochester
                    <br/>
                    <strong>Duration:</strong> Jan 2020-May 2020
                    <br/>
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
              
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Software Engineering Intern | Network Analyst   </strong>
                    <br/>
                    <strong>Employer:</strong> HCL Technologies
                    <br/>
                    <strong>Duration:</strong> Jun 2019 - Aug 2019
                    <br/>
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
              
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Information Technology Specialist    </strong>
                    <br/>
                    <strong>Employer:</strong> University of Rochester
                    <br/>
                    <strong>Duration:</strong> Jan 2020 - Present
                    <br/>
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>


          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
