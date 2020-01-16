import React from 'react';
import './style.scss';
import Logo from './../../assets/logo.png'

const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
            </div>
           Hello from React Component
        </header>
    )
};

export default Header;