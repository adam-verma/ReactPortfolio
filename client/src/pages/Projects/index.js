import React, { useState, useEffect } from "react";
import { Container, Row, Column } from "../../components/Grid";   
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
            <a href={secondItem.url}>
                <img className="card-img-top" src=""/>
                <div className="overlay">
                    <div className="card-body">
                        <p className="project-title">
                            {secondItem.title}
                        </p>
                    </div>
                </div>
            </a>
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
                    <p className="portfolio">Peruse through some project favorites.</p>
                    {project}
                    <div id="scrollbutton">
                        <a className="smoothscroll" href= "#contact"><i className="fa fa-leaf"></i></a>
                    </div>
                </Container>
            </Background>
        </div>
  )
}
export default Projects;