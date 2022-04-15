import React from "react";
import "./CourseCard.css";

function CourseCard({ imageLink, description, author, price, timing }) {
  return (
    <div className="ccard">
      <div className="ccard-container">
        <div className="ccard-image">
          <img src={imageLink} alt="" />
        </div>
        <div className="ccard-details">
          <div className="ccard-name">
            <span>{description}</span>
          </div>
          <div className="ccard-courseby">
            <span>{"Course by: "}</span>
            <span>{author}</span>
          </div>
          <div className="ccard-price-time">
            <div className="ccard-price">
              <span>{"$ " + price + " /-"}</span>
            </div>
            <div className="ccard-time">
              <span>{timing}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
