import React from "react";
import "./Heading.css";
import Button from "../Specific Elements/Button/Button";

function Heading() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="header-left">
          <div className="header-left-content">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
          </div>
          <div className="header-left-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              at quod ut sed, excepturi maiores voluptatum aliquam ea deserunt
              nostrum consequuntur quis optio magnam. Ducimus veritatis nisi
              incidunt consequuntur distinctio?
            </p>
          </div>
          <div className="header-left-content">
            <Button linkname={"Apply Now"} />
          </div>
        </div>
        <div className="header-right">
            <div className="header-right-image">
                <img src="https://i.postimg.cc/PJVM561n/rocket.png" alt="" />
            </div>
        </div>
      </div>
    </header>
  );
}

export default Heading;
