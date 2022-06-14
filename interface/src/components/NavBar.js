import React, {Component} from "react";
import icon from './Icon.png'

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src={icon}/>
            <h1 className="title">Recipe Book</h1>
        </div>
)
}


export default NavBar;