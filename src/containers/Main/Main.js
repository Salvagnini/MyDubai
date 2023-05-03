import React from "react";
import '../Main/Main.scss';
import slider from "../../containers/Main/image/slider.png";
import logo2 from "../../containers/Main/image/Rectangle 14.png";


 const Main = () => {

    return (
        <div className="main">
            <img src={slider} alt="slider" /> 
            <div className="main__text">
            <img src={logo2} alt="logo2" />
            </div>
        </div>
    );
};
export default Main;