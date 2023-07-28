import React from "react";

import "./index.css";
import Counter1 from "./Components/Counter1";
import Button from "./Components/button";
import { Navbar } from "./Components/body";
import { Aside } from "./Components/body";
import About from "./Components/about";
import Header from "./Components/header";
import Footer from "./Components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Contactus from "./Components/contact";
import { Route, Routes, BrowserRouter, Form } from "react-router-dom";
import Home from "./Components/home";
import Form2 from "./Components/Form";
import Sent from "./Components/Sent";
const Appp = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="body">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contactus />}></Route>
              <Route path="/events" element={<Button />}></Route>
              <Route path="/counter" element={<Counter1 />}></Route>
              <Route path="/form" element={<Form2 />}></Route>
              <Route path="/sent" element={<Sent />}></Route>
            </Routes>
          </div>
          <Aside />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default Appp;
