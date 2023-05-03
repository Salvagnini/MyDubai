import React from "react";
import '../Main/Main.scss';
import slider from "../../containers/Main/image/slider.png";



 const Main = () => {

    return (
        <div className="main">
            <img src={slider} alt="slider" /> 

            <div className="nav__text">
            </div>
        </div>
    );
};
export default Main;