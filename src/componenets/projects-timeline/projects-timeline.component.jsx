import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactToDoList from "../../assets/img/projects/path.jpg";
import L_MernTipCalc from "../../assets/img/projects/Doitright.jpg";
import L_GetGitHubInfo from "../../assets/img/projects/chatApp.jpg";
import L_SmartBrain from "../../assets/img/projects/dynamicM.jpg";
import L_RoboFriends from "../../assets/img/projects/portfolio.jpg";
import L_ProductHuntClone from "../../assets/img/projects/robot.jpg";
import L_PortfolioUsingDjango from "../../assets/img/projects/Firework.jpg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg"; 

import L_JAVA from "../../assets/img/skills/java.svg";
import L_C from "../../assets/img/skills/c1.svg";
import L_CC from "../../assets/img/skills/c2.svg";
import L_JAVASWING from "../../assets/img/skills/Javaswing.jpg";
import L_EAPI from "../../assets/img/skills/EclipseAPI.jpg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_Linux from "../../assets/img/skills/Linux.jpg";


import "./projects-timeline.styles.css"; 

const TimeLine = () => {
  return ( 
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project:  */}
        <ImageEvent
            date="02/17/2020"
            className="text-center"
            text="Street Mapper"
            src={L_ReactToDoList}
            alt="Street Mapper"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> •	Developed Java GUI application that implemented Dijkstra’s algorithm 
                        to compute the shortest path between two points on the real network of Monroe County and New York State.
                        <hr />
  
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="L_JAVA"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASWING}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVA Swing
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EAPI}
                                alt="API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Eclipse API
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>

              <div className="d-flex justify-content-between flex-nowrap text-center">
            
                <UrlButton
                  href="https://github.com/sainipiyush79/CSC172_Projects"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
          
              </div>
            </div>
          </ImageEvent>



<ImageEvent
            date="12/20/2020"
            className="text-center"
            text="Do IT Right"
            src={L_MernTipCalc}
            alt="Do IT Right"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                                •	Created a web application to teach people the correct and efficient methodologies to live a healthy lifestyle 
                                •	Implemented fully functional chatbot to guide user to find the resources on the application
                        <hr/>
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
   
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/sainipiyush79/Do.It.Right"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>

              </div>
            </div>
          </ImageEvent>

          {/* Project: Get GitHub Info */}
          <ImageEvent
            date="11/17/2020"
            className="text-center"
            text="CHAT APP"
            src={L_GetGitHubInfo}
            alt="CHAT APP"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                        • Built a chatting application for users to create their rooms while having unique usernames.
                       <br /> • Added the feature to share location and send notifications whenever a new user joins or leaves.
                        <hr />
                        
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                <UrlButton
                  href="https://github.com/sainipiyush79"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>

              </div>
            </div>
          </ImageEvent>

          {/* Project: Smart Brain */}
          <ImageEvent
            date="11/28/2020"
            className="text-center"
            text="Dynamic Memory Allocator"
            src={L_SmartBrain}
            alt="Dynamic Memory Allocator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                        •	Utilized Linux machine to design and program dynamic storage allocator for C/C++ programs <br/>
                        •	Implemented efficient malloc, free, and realloc routines for fast and optimized memory allocation

                        <hr />

                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CC}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              C
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_C}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              C++
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_Linux}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Linux
                            </span>
                          </li>
                         
                        </ul>
                        <hr />
     
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                <UrlButton
                  href="https://github.com/sainipiyush79/Dynamic-Memory-Allocator-"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>

              </div>
            </div>
          </ImageEvent>

          {/* Project: RoboFriends */}

          <ImageEvent
            date="1/16/2021"
            className="text-center"
            text="My-Portfolio"
            src={L_RoboFriends}
            alt="My-Portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> I made this website to showcase my Tech skills, achievements and experiences.
                         It is made using React.js and will eventually feature more content and will also be connected to a GraphQL backend.
                        <hr />

                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                       



                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://akjha96.github.io/RoboFriends/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/sainipiyush79/MyPortfolio"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Product_Hunt_Clone */}

          <ImageEvent
            date="4/12/2020"
            className="text-center"
            text="Artistic Robot"
            src={L_ProductHuntClone}
            alt="Artistic Robot"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> <br/>
                        • Used graph algorithms to program a robot that can click images and physically draw prompted text on paper 
                        <br/>
                        • Added a real-time file-sharing feature that allows robot to share image information with a computer
                        <hr />
                       
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MSSQL}
                                alt="L_MSSQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              MySQL
                            </span>
                          </li>
                    
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/sainipiyush79/Artistic_Robot"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portfolio using Django */}
          <ImageEvent
            date="07/12/2019"
            className="text-center"
            text="Fireworks"
            src={L_PortfolioUsingDjango}
            alt="Fireworks"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is fully customized java project which let user create their fireworks with the choice of colors.
                      
               
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="L_JAVA"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASWING}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVA Swing
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EAPI}
                                alt="API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Eclipse API
                            </span>
                          </li>
                        </ul>

             
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://github.com/sainipiyush79/Fireworks"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
