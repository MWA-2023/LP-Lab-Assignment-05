import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/brin.png";
import projImg2 from "../assets/img/port.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Braincheck",
      description: "AI & Machine learning",
      imgUrl: projImg1,
      link : "https://www.youtube.com/watch?v=nPjYiguUNss",
    },
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: projImg2,
    },
   
  ];

  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I take great pride in the work I have accomplished and am excited to share my creations with you. Each project represents my dedication, creativity, and commitment to excellence. Take a moment to browse through my portfolio and explore the diverse range of events I have organized.</p>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  
  
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
