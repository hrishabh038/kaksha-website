import React from "react";
import "./Button.css";

function Button({link , linkname}){
    return(
        <a href={link} className="button">
                <span>{linkname}</span>
        </a>
    )
}

export default Button