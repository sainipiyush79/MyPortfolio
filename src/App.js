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
import Experience from "./pages/experience/experience.component";
import TimeLine from "./componenets/projects-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component"
import FooterPanel from "./componenets/footer/footer.component";
// import Particles from "react-particles-js";
// import { particlesOptions } from "./particlesOptions";


const App = () => {
  return (
    <div  style={{ position: "relative" }}>
      <MyNavbar/>
      <MyCarousal/>
      <MyTitleMessage /> 
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}

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

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <TimeLine />
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <ContactForm />
          </Fade>
        </Container>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <FooterPanel />
          </Fade>
        </Container>
      </div>


     </div>
  );
}

export default App;
