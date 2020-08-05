import React from 'react';
import './styles.css';

import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <NavLink exact to="/" activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
                About
            </NavLink>
            <NavLink to="/services" activeClassName="active">
                Services
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
                Contact
            </NavLink>
        </div>
    );
}

export default Navbar;