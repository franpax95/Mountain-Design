import React from 'react';
import './styles.css';

export const Input = ({
    name = '',
    type = 'text',
    placeholder = '',
    value = '',
    onChange = undefined
}) => <input 
    className = "Input" 
    type = {type} 
    name = {name} 
    value = {value}
    placeholder = {placeholder} 
    onChange = {onChange}
    autoComplete = "off" 
/>;



export const TextArea = ({
    name = '',
    placeholder = '',
    value = '',
    onChange = undefined
}) => <textarea
    className = "TextArea"
    name = {name}
    value = {value}
    placeholder = {placeholder}
    onChange = {onChange}
></textarea>;


export const Submit = ({ children }) => <input className="Submit" type='submit' value={children} />;