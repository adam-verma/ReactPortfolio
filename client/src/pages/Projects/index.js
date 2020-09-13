import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../components/Grid";   
import profileData from "../../profileData.json";
import Background from "../../components/Background";
import "./style.css"

const Projects = () => {
    const [data, setData] = useState(profileData)
    const [project, setProject] = useState([])

    useEffect(() => {
    const projects = data.map((item, i) => {
        return item.projects.map((secondItem, i) => {
        return (
            <div key={secondItem.title} className="card project-item">
                <div className="overlay">
                    <img className="card-img-top" src={require(`../../media/images/${secondItem.image}`)} />
                    <i className="fas fa-arrow-down"></i>
                    <div className="card-body">
                        <h5 className="project-title">
                            {secondItem.title}
                        </h5>
                    </div>
                </div> 
                <div className="project-content">
                <Row>
                    <Col size="6">
                    <a href={secondItem.url}>Live App</a>
                    </Col>
                    <Col size="6">
                    <a href={secondItem.github}>GitHub Link</a>
                    </Col>
                </Row>
                </div>
            </div>
        )
        })
    })
    setProject(projects)
    }, [data.projects])

    return (
        <div id="projects">
            <Background backgroundImage={require("../../media/images/projects.jpg")} backgroundSize={"cover"} minHeight={"100%"} backgroundRepeat={"no-repeat"} backgroundAttachment={"fixed"} backgroundPosition={"center"}> 
                <Container fluid>
                    <p className="portfolio-title">Peruse through some project favorites.</p>
                    <Row> 
                    <div className="portfolio">
                    {project}
                    </div>
                    </Row>
                    <div id="scrollbutton">
                        <a className="smoothscroll" href= "#contact"><i className="fa fa-leaf"></i></a>
                    </div>
                </Container>
            </Background>
        </div>
  )
}
export default Projects;