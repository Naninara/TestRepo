import React from "react";
import Menu from "./Components/Menu";
import Sidebar from "./Components/Sidebar";
import { UseData } from "./Hooks/useData";
function App() {
  return (
    <div className="flex">
      <UseData>
        <Sidebar />
        <Menu />
      </UseData>
    </div>
  );
}

export default App;
