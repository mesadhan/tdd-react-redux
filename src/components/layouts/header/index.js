import React from 'react';
import './style.scss';
import Logo from './../../../assets/logo.png'
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <Link to="/" className="logo">
                    <img data-test="logoImage" src={Logo} alt="logo"/>
                </Link>
                <div className="welcome">
                    <h1>Md. Sadhan Sarker</h1>
                </div>
            </div>
           {/* Hello from React Component */}
        </header>
    )
};

export default Header;
