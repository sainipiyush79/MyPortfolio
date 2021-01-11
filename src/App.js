import React from 'react';
import './App.css';


import MyNavbar from './componenets/my-navbar/mynavbar.component'
import MyCarousal from './componenets/my-carousal/my-carousal.component'
import MyTitleMessage from "./componenets/title-message/title-message.component";
import About from "./pages/about/about.component";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Fade from 'react-reveal/Fade';
import Skills from "./pages/skills/skills.component";
import Slide from "react-reveal/Slide";


const App = () => {
  return (
    <div>
      <MyNavbar/>
      <MyCarousal/>
      <MyTitleMessage /> 


      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* adding skill set */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
     </div>
  );
}

export default App;
