import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../components/Grid";
import Background from "../../components/Background";
import profileData from "../../profileData.json";
import "./style.css";

const About = () => {

    const resumeLink = require("../../media/Adam Verma Full Stack Dev Resume.pdf");
    const [data, setData] = useState(profileData); 
    const [props, setProps] = useState({
        image: "",
        resume: "",
        name: "",
        address: "",
        contact: ""
    });
    useEffect(() => {
        let profPic = data.map((attr, i) => {
            return (<img className="profpic" src={require("../../media/images/headshot.jpg")} alt="Profile Pic" style={{"height":"200px", "margin": "100 50"}} />) 
        })
        let name = data.map((attr, i) => {
        return (<p className="name">{attr.about.name}</p>)
        })
        let address = data.map((attr, i) => {
            return (<p className="address">{attr.about.citystatezip} </p>)
        })
        let contact = data.map((attr, i) => {
            return (<p className="contact"> <span><a href="mailto:vermaadam@gmail.com">{attr.about.email}</a></span><br/>
                        <span>{attr.about.number}</span> </p>)
        })
        setProps({image: profPic, name: name, contact: contact, address: address})      
    }, [])

    
    console.log(props);
    if (profileData) {
    return (
            <div id="about">
                <Background backgroundImage={require("../../media/images/about.jpg")} backgroundSize={"cover"} minHeight={"100vh"} backgroundRepeat={"no-repeat"} backgroundAttachment={"fixed"} backgroundPosition={"center"}> 
                    <Row>
                        <h1 className="aboutheading"> About </h1>
                        <Col size="md-3">
                        {props.image} 
                        <p id="resumeWrapper" type="button"> 
                            <a href={resumeLink} className="downloadresume" target="_blank" rel="noopener noreferrer" style={{"margin-left":"100"}} download><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                        </Col>
                        <Col size="md-9">
                            <div className="about-banner">
                            <h4 className="contactheading">Contact Info</h4>
                            {props.name} 
                            {props.contact}
                            {props.address}
                            </div>
                        </Col>
                    </Row>
                    <div id="scrollbutton">
                        <a className="button smoothscroll" href= "#projects"><i className="fa fa-leaf"></i></a>
                    </div>
                </Background>
            </div>
        )
    }
}

export default About; 
