import React from "react";
import "./CompanyDetails.css";
import SectionHeading from "../Specific Elements/SectionHeading/SectionHeading";

function CompanyDetails({
  heading,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
}) {
  return (
    <section className="cd">
      <SectionHeading heading={heading} />
      <div className="cd-container container">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
        <p>{p5}</p>
        <p>{p6}</p>
        <p>{p7}</p>
        <p>{p8}</p>
        <p>{p9}</p>
        <p>{p10}</p>
        <p>{p11}</p>
      </div>
    </section>
  );
}

export default CompanyDetails;
