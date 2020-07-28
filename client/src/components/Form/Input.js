import React from "react";
import { TextArea } from "./TextArea";

export const Input = props => {
  const { name, label, ...other} = props

  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        {(name === "message") ?
        <TextArea 
        name={name}
        rows="6" 
        cols="50"
        {...other}/> :
        <input 
        className="form-control" 
        name={name}
        {...other}/> 
        }
    </div>
  );  
}
