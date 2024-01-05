import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Line from "../Assets/Line.svg";

import CompletedComponent from "./CompletedComponent";
import InProgressComponent from "./InProgressComponent";
import InReviewComponent from "./InReviewComponent";
import ToDocomponent from "./ToDocomponent";

const menu = [
  <ToDocomponent />,
  <InProgressComponent />,
  <InReviewComponent />,
  <CompletedComponent />,
];
function Menu() {
  const loginData = useSelector((state) => state.login);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loginData) {
      navigate("/login");
    }
  }, [loginData, navigate]);
  return (
    <div className="flex flex-col font-Nunito w-full">
      <div className=" w-full h-[60px] flex items-center  text-[18px] border-b-2 border-b-Foundation py-[16px] pl-[24px] ">
        <h1 className="text-[#12BB23]">My Projects</h1>
      </div>

      <div className="flex  justify-between items-center md:items-start pr-4 flex-col md:flex-row">
        {menu.map((ele) => {
          return (
            <>
              {ele}
              <img src={Line} alt="line" className=" hidden md:block" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
