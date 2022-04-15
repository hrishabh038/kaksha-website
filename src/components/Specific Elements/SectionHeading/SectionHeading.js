import React from "react";
import "./SectionHeading.css";

function SectionHeading({ heading }) {
  return (
    <div className="section-heading">
      <span>{heading}</span>
    </div>
  );
}
export default SectionHeading;
