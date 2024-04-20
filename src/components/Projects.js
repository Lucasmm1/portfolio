import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.jpeg";
import projImg2 from "../assets/img/img2.jpeg";
import projImg3 from "../assets/img/img3.jpeg";
import projImg4 from "../assets/img/img4.jpeg";
import projImg5 from "../assets/img/img5.jpeg";
import projImg6 from "../assets/img/img6.jpeg";
import projImg7 from "../assets/img/img7.jpeg";
import projImg8 from "../assets/img/img8.jpeg";
import projImg9 from "../assets/img/img9.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTab1 = [
    {
      title: "CatalogSTT",
      description: "Usability Evaluation",
      imgUrl: projImg1,
    },
    {
      title: "XFrame APP",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "OIAR",
      description: "Open Educational Resources",
      imgUrl: projImg3,
    },
  ];

  const projectsTab2 = [
    {
      title: "Python Development",
      description: "KNN Network and Search Algorithms",
      imgUrl: projImg4,
    },
    {
      title: "Python Development",
      description: "Expansion of a Laboratory Network",
      imgUrl: projImg5,
    },
    {
      title: "Java/JavaFX Development",
      description: "Wheel of Fortune",
      imgUrl: projImg6,
    },
    {
      title: "Java/JavaFX Development",
      description: "Generic Data Structures and Complexity Analysis",
      imgUrl: projImg7,
    },
    {
      title: "C/C++ Development",
      description: "Translator/AutoComplete",
      imgUrl: projImg2,
    },
  ];

  const projectsTab3 = [
    {
      title: "Embraer",
      description: "Software Development Engineer (remote)",
      imgUrl: projImg8,
    },
    {
      title: "Stone.CO",
      description: "Software Testing (remote)",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check out some of the projects I've worked on, which demonstrate my skills in design and development, ranging from web applications to data analysis projects. Take a look at my resume too!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Scientific research</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Academic projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Work experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTab1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
