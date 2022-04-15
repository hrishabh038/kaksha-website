import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/navbar";
import Home from "./Home/Home";
import About from "./About/About";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
