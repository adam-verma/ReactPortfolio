import React, { useState, useEffect } from "react";
import { Container, Row, Column } from "../../components/Grid";
import {FormBtn, Input, TextArea} from "../../components/Form";
import api from "../../utils/api"; 
import Background from "../../components/Background";
import "./style.css";

const Contact = () => {
    const [ inputFields, setinputFields ] = useState({ 
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleInputChange = event => {
    try {
        const { name , value} = event.target;
        setinputFields({
        ...inputFields,    
        [name] : value
        })
    }
    catch (error) {
        console.log(error)
    }
    }
    
    const handleFormSubmit = async event => {
        event.preventDefault();
        if (inputFields.name && inputFields.email && inputFields.message) {
            try {
                await api.saveContact({
                    ...inputFields,
                })
                setinputFields({
                name: "",
                email: "",
                subject: "",
                message: ""
                });
            } catch (error) {
                console.group("SUBMIT FORM");
                console.log(error);
                console.groupEnd(); 
            }
        }
    };

    return (
        <Background backgroundImage={require("../../media/images/contact.jpg")} backgroundSize={"cover"} minHeight={"100vh"} backgroundRepeat={"no-repeat"} backgroundAttachment={"fixed"} backgroundPosition={"center"}> 
            <Container fluid>
                <Row>
                <a className="contacticon"><i className="fa fa-address-book-o"></i></a>
                </Row>
                <Row>
                    <form id="contact">
                        <Input type="text" label="Name" name="name" placeholder={"Name (required)"} value={inputFields.name} onChange={handleInputChange} />
                        <Input type="text" label="Email" name="email" placeholder="Email (required)" value={inputFields.email} onChange={handleInputChange} />
                        <Input type="text" label="Subject" name="subject" placeholder="Subject (optional)" value={inputFields.subject} onChange={handleInputChange} />
                        <Input type="text" label="Message" name="message" placeholder="Message (required)" value={inputFields.message} onChange={handleInputChange} />
                        <FormBtn
                        disabled={!(inputFields.name && inputFields.email && inputFields.message)}
                        onClick={handleFormSubmit}
                        >
                        Submit
                        </FormBtn>  
                    </form>
                </Row>
            </Container>
        </Background>
    )
}

export default Contact;