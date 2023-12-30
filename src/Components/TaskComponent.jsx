import React from "react";

function TaskComponent() {
  return (
    <div
      className=" flex flex-col w-[270px] h-[114px] p-[16px] gap-[10px] rounded-md"
      style={{ boxShadow: "0px 0px 8px 0px rgba(54, 89, 226, 0.16)" }}
    >
      <h1>Create a to-do app</h1>
      <div className="flex gap-[24px]">
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[12px] text-[#777]">Start Date</h1>
          <div className="flex w-[81px] h-[24px] items-center text-[12px] rounded-md justify-center bg-[#EBEEFC] px-[8px] py-[4px] text-[#3659E2]">
            01/01/2023
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[12px] text-[#777]">Deadline</h1>
          <div className="flex w-[81px] h-[24px] items-center text-[12px] rounded-md justify-center bg-[#EBEEFC] px-[8px] py-[4px] text-[#3659E2]">
            01/01/2023
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskComponent;
