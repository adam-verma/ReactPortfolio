import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../../components/Grid";
import Background from "../../components/Background";
import profileData from "../../profileData.json";
import "./style.css";

const Home = () => {

    const [data, setData] = useState(profileData);
    const [props, setProps] = useState({
        networks: [], 
        brand: ""});
    const [statement, setStatement] = useState("");
    console.log(data);
    
    useEffect(() => {
    let networks = data.map((media, i) => {
        return media.home.social.map(social => {
        return (<li key={social.name}><a href={social.url}><i className={social.icon}></i></a></li>) 
        })
    })
    console.log(networks)
    const brand = data.map((statement) => {
        return (
            statement.home.brand_statement
        )
    })

    setProps({networks:networks, brand:brand})
    }, []);

    return (
        <div id="home">
            <Background backgroundImage={require("../../media/images/bgphoto2.jpg")} backgroundSize={"cover"} minHeight={"100%"} backgroundRepeat={"no-repeat"} backgroundAttachment={"fixed"} backgroundPosition={"center"}>
                <Row>
                    <header className="home-banner" role="banner"> 
                        <h1 className="headline">Meet Adam.</h1>
                        <p className="brand">
                            {props.brand}
                        </p>
                        <div className="media-container">
                            <ul className="media">
                                {props.networks}
                            </ul>
                        </div>
                    </header>
                    <div id="scrollbutton">
                        <a className="smoothscroll " href= "#about"><i className="fa fa-leaf"></i></a>
                    </div>
                </Row>
            </Background>
        </div>
    )
}

export default Home;