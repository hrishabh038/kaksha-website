import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/Navigation/navbar";
import Footer from "./components/Footer/Footer";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);