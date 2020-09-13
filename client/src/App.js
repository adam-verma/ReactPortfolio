import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App-body">
        < Nav />
        < Home />
        < About />
        < Projects />
        < Contact /> 
        < Footer />  
      </div>
    </div>
  ); 
}

export default App;
