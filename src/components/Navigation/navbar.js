import React from "react";
import "./navbar.css";
import NavButton from "./navButton/navButton";
import { nav } from "../../Backend/data";
function Navbar() {
  return (
    <nav className="navigation sticky-top">
      <div className="navigation-container container">
        <div className="navigation-logo">
          <div className="logo">
            <img src="https://i.postimg.cc/9FF29xjy/2.png" alt="" />
          </div>
        </div>
        <div className="navigation-buttons">
          {nav.map((data) => (
            <NavButton linkname={data.navName} link={data.navLink} />
          ))}
        </div>
        <div className="navigation-buttons">
          <NavButton linkname={"Dashboard Board"} />
        </div>
        <div className="navigation-dropdown">
          <div class="dropdown">
            <button class="dropbtn">
              <i class="bx bx-menu"></i>
            </button>
            <div class="dropdown-content">
            {
              nav.map((data) => (
                <a href={data.navLink}>{data.navName}</a>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
