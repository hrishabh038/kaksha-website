import React from "react";
import "./navButton.css";

function NavButton({link, linkname}){
    return(
        <a href={link} className="navButton">
            <span>{linkname}</span>
        </a>
    )
}

export default NavButton