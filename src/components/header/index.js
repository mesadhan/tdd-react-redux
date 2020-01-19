import React from 'react';
import './style.scss';
import Logo from './../../assets/logo.png'

const Header = (props) => {
    return (
        <header className="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoImage" src={Logo} alt="logo"/>
                </div>
            </div>
           Hello from React Component
        </header>
    )
};

export default Header;