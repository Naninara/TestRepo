import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function AddItem({ setModelOpen, modelOpen }) {
  const [dropDown, setDropDown] = useState();

  const [inputData, setInputData] = useState({ status: "To Do" });
  const loginData = useSelector((state) => state.login);
  const { id, username, password } = loginData;

  const [errors, setErrors] = useState(false);
  const handleSubmit = () => {
    if (!inputData.end || !inputData.start || !inputData.name) {
      setErrors(true);
      return;
    }

    axios
      .post(
        "http://localhost:3500/user/addtask",
        {
          ...inputData,
          createdby: id,
        },
        {
          auth: {
            username: username,
            password: password,
          },
        }
      )
      .then(() => {
        setModelOpen(!modelOpen);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center  fixed top-0 left-0 backdrop-brightness-50 ">
      <div className=" w-[300px] md:w-[670px] h-auto flex flex-col z-20 bg-white rounded-md ">
        <div className="flex w-auto h-[52px] justify-between px-[24px] py-[10px] items-center font-Nunito text-[#263FA0] border-b-2  border-b-[#D8E0FD]">
          <h1>{"Create A Task"}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            onClick={() => {
              setModelOpen(!modelOpen);
            }}
          >
            <path
              d="M4.25176 4.25176C4.33137 4.17196 4.42593 4.10864 4.53004 4.06544C4.63416 4.02224 4.74577 4 4.85849 4C4.97121 4 5.08282 4.02224 5.18693 4.06544C5.29104 4.10864 5.38561 4.17196 5.46521 4.25176L10.0002 8.78849L14.5352 4.25176C14.6149 4.17209 14.7095 4.10888 14.8136 4.06576C14.9177 4.02264 15.0293 4.00045 15.142 4.00045C15.2546 4.00045 15.3662 4.02264 15.4703 4.06576C15.5744 4.10888 15.669 4.17209 15.7487 4.25176C15.8284 4.33144 15.8916 4.42603 15.9347 4.53013C15.9778 4.63423 16 4.74581 16 4.85849C16 4.97117 15.9778 5.08274 15.9347 5.18685C15.8916 5.29095 15.8284 5.38554 15.7487 5.46521L11.212 10.0002L15.7487 14.5352C15.8284 14.6149 15.8916 14.7095 15.9347 14.8136C15.9778 14.9177 16 15.0293 16 15.142C16 15.2546 15.9778 15.3662 15.9347 15.4703C15.8916 15.5744 15.8284 15.669 15.7487 15.7487C15.669 15.8284 15.5744 15.8916 15.4703 15.9347C15.3662 15.9778 15.2546 16 15.142 16C15.0293 16 14.9177 15.9778 14.8136 15.9347C14.7095 15.8916 14.6149 15.8284 14.5352 15.7487L10.0002 11.212L5.46521 15.7487C5.38554 15.8284 5.29095 15.8916 5.18685 15.9347C5.08274 15.9778 4.97117 16 4.85849 16C4.74581 16 4.63423 15.9778 4.53013 15.9347C4.42603 15.8916 4.33144 15.8284 4.25176 15.7487C4.17209 15.669 4.10888 15.5744 4.06576 15.4703C4.02264 15.3662 4.00045 15.2546 4.00045 15.142C4.00045 15.0293 4.02264 14.9177 4.06576 14.8136C4.10888 14.7095 4.17209 14.6149 4.25176 14.5352L8.78849 10.0002L4.25176 5.46521C4.17196 5.38561 4.10864 5.29104 4.06544 5.18693C4.02224 5.08282 4 4.97121 4 4.85849C4 4.74577 4.02224 4.63416 4.06544 4.53004C4.10864 4.42593 4.17196 4.33137 4.25176 4.25176Z"
              fill="#97A1B2"
            />
          </svg>
        </div>
        <div className=" overflow-scroll">
          <div className="w-auto h-[290px] px-[24px] py-[16px] flex flex-col gap-[24px]">
            <div className="w-auto h-[68px] gap-[4px] ">
              <h1>Name of the Task</h1>
              <input
                type={"text"}
                className="h-[44px] px-[12px] py-[4px] w-[250px] md:w-[622px] border-[1px] border-[#B9C0CB] rounded-md"
                placeholder="Text"
                onChange={(e) => {
                  setInputData((prev) => ({ ...prev, name: e.target.value }));
                  console.log(inputData);
                }}
              />
              {errors && (
                <p className="text-[12px] font-Nunito my-1 text-red-500">
                  Please Fill The Name
                </p>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-[10px] text-[12px]">
              <div className="flex flex-col gap-[4px]">
                <h4>Start date</h4>
                <input
                  type={"date"}
                  className="h-[44px] px-[12px] py-[4px] w-[250px] md:w-[306px] border-[1px] border-[#B9C0CB] rounded-md"
                  placeholder="Text"
                  onChange={(e) => {
                    setInputData((prev) => ({
                      ...prev,
                      start: e.target.value,
                    }));
                    console.log(inputData);
                  }}
                />
                {errors && (
                  <p className="text-red-500">Please Fill Start Date</p>
                )}
              </div>
              <div className="flex flex-col gap-[4px]">
                <h4>End Date</h4>
                <input
                  type={"date"}
                  className="h-[44px] px-[12px] py-[4px] w-[250px] md:w-[306px] border-[1px] border-[#B9C0CB] rounded-md"
                  placeholder="Text"
                  onChange={(e) => {
                    setInputData((prev) => ({ ...prev, end: e.target.value }));
                    console.log(inputData);
                  }}
                />
                {errors && <p className="text-red-500">Please Fill End Date</p>}
              </div>
            </div>

            <div className="flex flex-col gap-[4px] text-[12px]">
              <h4>Status</h4>
              <div
                className="h-[44px] px-[12px] py-[4px] w-[250px] md:w-[622px] border-[1px] border-[#B9C0CB] rounded-md flex justify-between items-center"
                onClick={() => {
                  setDropDown(!dropDown);
                }}
              >
                <h1>{inputData.status}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 11.7043L15.9377 5.76659C16.0483 5.65203 16.1807 5.56064 16.327 5.49778C16.4734 5.43491 16.6308 5.40182 16.79 5.40044C16.9493 5.39905 17.1073 5.4294 17.2547 5.48972C17.4021 5.55003 17.536 5.6391 17.6487 5.75172C17.7613 5.86435 17.8504 5.99828 17.9107 6.1457C17.971 6.29312 18.0013 6.45107 18 6.61034C17.9986 6.76961 17.9655 6.92702 17.9026 7.07336C17.8397 7.21971 17.7484 7.35207 17.6338 7.46273L10.8481 14.2485C10.6231 14.4733 10.3181 14.5997 10 14.5997C9.68193 14.5997 9.37688 14.4733 9.15193 14.2485L2.3662 7.46273C2.25163 7.35207 2.16025 7.21971 2.09739 7.07336C2.03452 6.92702 2.00143 6.76961 2.00005 6.61034C1.99866 6.45107 2.02901 6.29312 2.08932 6.1457C2.14964 5.99828 2.23871 5.86435 2.35133 5.75172C2.46396 5.6391 2.59789 5.55003 2.74531 5.48972C2.89273 5.4294 3.05068 5.39905 3.20995 5.40044C3.36922 5.40182 3.52663 5.43491 3.67297 5.49778C3.81932 5.56064 3.95168 5.65203 4.06234 5.76659L10 11.7043Z"
                    fill="#97A1B2"
                  />
                </svg>
              </div>
              <div className="h-[140px] flex flex-col absolute">
                {dropDown && (
                  <>
                    <div
                      className="flex px-[16px] gap-[12px] h-[40px] bg-white cursor-pointer w-[250px] md:w-auto z-30 hover:bg-slate-300 rounded-sm items-center"
                      onClick={(e) => {
                        setInputData((prev) => ({
                          ...prev,
                          status: "In Progress",
                        }));
                        setDropDown(!dropDown);

                        console.log(inputData);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.99998 14.4001C4.46526 14.4001 1.59998 11.5348 1.59998 8.0001C1.59998 4.46538 4.46526 1.6001 7.99998 1.6001C11.5347 1.6001 14.4 4.46538 14.4 8.0001C14.4 11.5348 11.5347 14.4001 7.99998 14.4001Z"
                          fill="#EE46BC"
                        />
                      </svg>
                      <h4>In Progress</h4>
                    </div>
                    <div
                      className="flex px-[16px] gap-[12px] h-[40px] bg-white cursor-pointer z-30 hover:bg-slate-300 rounded-sm items-center"
                      onClick={(e) => {
                        setInputData((prev) => ({
                          ...prev,
                          status: "In Review",
                        }));
                        setDropDown(!dropDown);
                        console.log(inputData);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.99998 14.4001C4.46526 14.4001 1.59998 11.5348 1.59998 8.0001C1.59998 4.46538 4.46526 1.6001 7.99998 1.6001C11.5347 1.6001 14.4 4.46538 14.4 8.0001C14.4 11.5348 11.5347 14.4001 7.99998 14.4001Z"
                          fill="#3FA1E3"
                        />
                      </svg>
                      <h4>In Review</h4>
                    </div>

                    <div
                      className="flex px-[16px] gap-[12px] h-[40px] bg-white cursor-pointer z-30 hover:bg-slate-300 rounded-sm items-center"
                      onClick={(e) => {
                        setInputData((prev) => ({
                          ...prev,
                          status: "Completed",
                        }));
                        setDropDown(!dropDown);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M7.99998 14.4001C4.46526 14.4001 1.59998 11.5348 1.59998 8.0001C1.59998 4.46538 4.46526 1.6001 7.99998 1.6001C11.5347 1.6001 14.4 4.46538 14.4 8.0001C14.4 11.5348 11.5347 14.4001 7.99998 14.4001Z"
                          fill="#12BB23"
                        />
                      </svg>
                      <h4>Completed</h4>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto h-[52px] flex items-center px-[24px] justify-end gap-[10px] border-t-2 border-t-[#D8E0FD] ">
          <button
            className="h-[32px] w-[69px] px-[8px] py-[10px] text-[12px] bg-[#EBEEFC] flex items-center  justify-center  rounded-md"
            onClick={() => {
              setModelOpen(!modelOpen);
            }}
          >
            Cancel
          </button>
          <button
            className="h-[32px] px-[8px] py-[10px] text-[12px] w-[55px] bg-[#3659E2] flex items-center justify-center text-white flex items-center rounded-md"
            onClick={handleSubmit}
          >
            {"Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddItem;
