import React from "react";
import '../../components/Logo/Logo.js';
import '../Header/Header.scss';

import logo from "../../containers/Header/image/Logo.png";


 const Header = () => {

    return (
        <div className="nav">
            <div className="nav__logo">
                <img src={logo} alt="logo" />   
            </div>
            <div className="nav__text">
                <p>DubaiRealty</p>
                <p>Real Estate</p>
            </div>
            <div className="nav__links">
                <a className="nav__links__li nav__links__li__buy">BUY</a>
                <a className="nav__links__li">BLOG</a>
                <a className="nav__links__li">ABOUT</a>
                <a className="nav__links__li">CONTACT</a>
            </div> 
            <div className="nav__buttons">
                <div className="nav__buttons_glob">
                    <button className="btn__consultation">Book a consultation</button>
                    <div className="nav__language">
                        <button className="btn__lang">EN</button>
                        <button className="btn__lang">UA</button>
                    </div>
                </div>
            <a className="nav__phone" href="tel:+123456789">+3 (099) 111-11-11 </a>
            </div>
        </div>
    );
};
export default Header;