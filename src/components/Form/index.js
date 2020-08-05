import React from 'react';
import './styles.css';

const Form = ({ width = '100%', height = '100%', onSubmit = undefined, children }) => (
    <div className="Form" onSubmit={onSubmit} style={{ width, height }}>
        {children}
    </div>
);

export default Form;