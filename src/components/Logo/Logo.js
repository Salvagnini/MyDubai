import React from "react";
import { NavLink } from "react-router-dom";
import './Logo.scss';

export const Logo = () => {

    return (

        <div class='logo'>
            <NavLink to='/'>
                <a>DubaiRealty</a>
                <br>Real Estate</br>
            </NavLink>
        </div>
        
    );
};
export default Logo;