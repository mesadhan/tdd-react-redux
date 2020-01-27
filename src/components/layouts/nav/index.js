import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <div data-test="navComponent" className="navComponent">
            <div className="leftMenus">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="rightMenus">
                <img data-test="userLogo" src="https://mesadhan.github.io/assets/profile_pic.jpg" alt="logo"/>
            </div>
        </div>
    )
};

export default Nav;