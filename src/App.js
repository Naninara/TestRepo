import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPage from "./Components/EditPage";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Menu />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
