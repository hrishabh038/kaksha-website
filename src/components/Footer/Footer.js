import React, { useState } from "react";
import "./Footer.css";

// importing Components
import { nav } from "../../Backend/data";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-container container">
        <div
          className="footer-content-container"
          style={({ marginRight: "45px" }, { width: "275px" })}
        >
          <div className="footer-head">
          <div className="logo">
            <img src="https://i.postimg.cc/TY76JrRF/Kaksha-1.png" alt="" />
          </div>
          </div>
          <div className="c__offWhite">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est adipisci soluta blanditiis! Quos, optio numquam? Quod non ullam harum. Corrupti quisquam blanditiis ea quidem sapiente quasi at illum ipsum!</p>
          </div>
        </div>
        <div className="footer-content__nav-container">
          <div className="footer-content-container">
            <FooterNavigation
              navname={"Easy Navigation"}
              linkname1={"Know More"}
              link1={"#about-me"}
              linkname2={"Projects"}
              link2={"#projects"}
              linkname3={"Testimonials"}
              link3={"#testimonials"}
              linkname4={"Qualification"}
              link4={"#qualification"}
              linkname5={"Contact Me"}
              link5={"#contact-me"}
            />
          </div>
          <div className="footer-content-container">
            <FooterNavigation
              navname={"Active Locations"}
              linkname1={"Bhopal"}
              linkname2={"Varanasi"}
            />
          </div>
          <div className="footer-content-container">
            <FooterNavigation
              navname={"Contact Options"}
              email={"example@company.com"}
              phone={"+91"+" "+"XXXXX XXXXX"}
            />
          </div>
        </div>
      </div>
      <div className="footer-copyright container c__offWhite">
        <span className="copyright-symbol">{"©"}</span>
        <span className="copyright-symbol">{currentYear}</span>
        <span className="copyright-symbol">{"Hrishabh"}</span>
        <span className="copyright-symbol">{"Jain."}</span>
        <span className="copyright-symbol">{"All"}</span>
        <span className="copyright-symbol">{"Rights"}</span>
        <span className="copyright-symbol">{"Reserved."}</span>
      </div>
    </div>
  );
}

export default Footer;
