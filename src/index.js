import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Appp from "./App";
import Button from "./Components/button";
import { Navbar } from "./Components/body";
import { Aside } from "./Components/body";
import { Content } from "./Components/body";
import About from "./Components/about";
import Header from "./Components/header";
import reportWebVitals from "./reportWebVitals";
import Footer from "./Components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Contactus from "./Components/contact";
import { Route, Routes, BrowserRouter, Form } from "react-router-dom";
import Home from "./Components/home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appp />
  </React.StrictMode>
);
