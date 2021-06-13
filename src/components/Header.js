import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Areas of Interest</h1>
                <Typed
                className = "type-text"
                strings={["Web Development", "Flutter Development", "AI & ML","DATA SCIENCE","GOOGLE ADs"]}
                typeSpeed = {40}
                backSpeed = {60}
                loop 
                />
                <a href="#" className = "btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
