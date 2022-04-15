import React from "react";
import "./Home.css";

// components
import Navbar from "../components/Navigation/navbar";
import Heading from "../components/Heading/Heading";
import Caricullum from "../components/Caricullum/Caricullum";
import Footer from "../components/Footer/Footer";
import CoursesOffered from "../components/CoursesOffered/CoursesOffered";

function Home() {
  return (
    <div className="home">
      <Heading />
      <Caricullum />
      <CoursesOffered />
    </div>
  );
}

export default Home;
