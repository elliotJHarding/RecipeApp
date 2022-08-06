import React, {Component} from "react";
import icon from './Icon.png'
import NavItem from "./NavItem";

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar__group navbar__brand">
                <img className="navbar__logo" src={icon}/>
                <h1 className="navbar__title">Recipe Book</h1>
            </div>
            <div className="navbar__group">
                <NavItem text="Recipes" icon="text_snippet"/>
                <NavItem text="Plans" icon="calendar_month"/>
            </div>
            <div className="navbar__group navbar__auth">
                <NavItem text="Login" icon="person"/>
            </div>
        </div>
)
}


export default NavBar;