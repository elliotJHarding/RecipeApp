import React, {Component} from "react";

function NavItem(props) {
    return (
        <div className="navbar__item">
            <div>
                {props.icon != undefined &&
                <span className="material-symbols-outlined">{props.icon}</span>
                }
                <p>{props.text}</p>
            </div>
        </div>
)
}


export default NavItem;