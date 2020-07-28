import React, { useState, useEffect } from "react";
import "./style.css";
import { Container, Row, Col } from "../../components/Grid";
import profileData from "../../profileData.json";

const Footer = () => {
  const [data, setData] = useState(profileData);
  const [props, setProps] = useState({
    networks: []
  })
  
    useEffect(() => {
      let networks = data.map((media, i) => {
        return media.home.social.map(social => {
        return (<li key={social.name}><a href={social.url}><i className={social.icon} style={{"margin-top":"300px", "margin-left":"15px", "height": "50px"}}></i></a></li>) 
        })
      })
      setProps({networks: networks})
    }, [])

  return (
    <footer>
      <div className="media-container">
          <ul className="media">
              {props.networks}
          </ul>
      </div>
      <div className="copyright">
        <span> &copy; 2019-2020 <a title="Adam Verma" href="https://github.com/adam-verma/ReactPortfolio"> Adam Verma </a> </span> 
      </div>
    </footer>
  );
}
 
export default Footer;
