import React from "react";
import circle from "../Assets/Circle.svg";

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
  return (
    <div className="flex flex-col font-Nunito">
      <div className=" w-[1200px] h-[60px] flex items-center  text-[18px] border-b-2 border-b-Foundation py-[16px] pl-[24px] ">
        <h1 className="text-[#12BB23]">My Projects</h1>
      </div>

      <div className="flex  flex-col md:flex-row">
        <ToDocomponent />
        <img
          src={Line}
          className="h-[80%] mt-[24px] ml-[12.5px] hidden md:block"
          alt="line"
        />
        <InProgressComponent />
        <img
          src={Line}
          className="h-[80%] mt-[24px] ml-[12.5px] hidden md:block"
          alt="line"
        />
        <InReviewComponent />
        <img
          src={Line}
          className="h-[80%] mt-[24px] ml-[12.5px] hidden md:block"
          alt="line"
        />
        <CompletedComponent />
      </div>
    </div>
  );
}

export default Menu;
