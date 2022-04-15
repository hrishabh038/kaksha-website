import React from "react";
import "./FooterNavigation.css";

function FooterNavigation({
  navname,
  linkname1,
  link1,
  linkname2,
  link2,
  linkname3,
  link3,
  linkname4,
  link4,
  linkname5,
  link5,
  linkname6,
  link6,
  linkname7,
  link7,
  email,
  phone,
}) {
  return (
    <div className="footer-navigation">
      <div className="footer-navigation-heading">
        <span>{navname}</span>
      </div>
      <div className="footer-navigation-option">
        <a href={link1} className="footer-navigation-option-link c__offWhite">
          <span>{linkname1}</span>
        </a>
      </div>
      <div className="footer-navigation-option">
        <a href={link2} className="footer-navigation-option-link c__offWhite">
          <span>{linkname2}</span>
        </a>
      </div>
      <div className="footer-navigation-option">
        <a href={link3} className="footer-navigation-option-link c__offWhite">
          <span>{linkname3}</span>
        </a>
      </div>
      <div className="footer-navigation-option">
        <a href={link4} className="footer-navigation-option-link c__offWhite">
          <span>{linkname4}</span>
        </a>
      </div>
      <div className="footer-navigation-option">
        <a href={link5} className="footer-navigation-option-link c__offWhite">
          <span>{linkname5}</span>
        </a>
      </div>
      <div className="footer-navigation-option">
        <a href={link6} className="footer-navigation-option-link c__offWhite">
          <span>{linkname6}</span>
        </a>
      </div>
      <div className="footer-navigation-option">
        <a href={link7} className="footer-navigation-option-link c__offWhite">
          <span>{linkname7}</span>
        </a>
      </div>
      <div className="footer-navigation-option">
        <a href={"mailto: "+email} className="footer-navigation-option-link c__offWhite">
          <span>{email}</span>
        </a>
      </div>
      <div className="footer-navigation-option">
        <a href={"tel: " + phone} className="footer-navigation-option-link c__offWhite">
          <span>{phone}</span>
        </a>
      </div>
    </div>
  );
}
export default FooterNavigation;
