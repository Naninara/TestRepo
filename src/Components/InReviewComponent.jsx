import React, { useState } from "react";
import ModalBox from "./AddItem";

function InReviewComponent() {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <div className="flex flex-col w-[270px] h-[84px] mt-[24px] ml-[24px] gap-[20px]">
      <div>
        <button
          className={`flex gap-[10px] items-center bg-[#EFF8FF] px-[12px] py-[4px] text-[#3FA1E3] rounded-3xl  h-[32px] text-sm`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <g clip-path="url(#clip0_2307_4)">
              <path
                d="M3.99999 7.19999C2.23263 7.19999 0.799988 5.76735 0.799988 3.99999C0.799988 2.23263 2.23263 0.799988 3.99999 0.799988C5.76735 0.799988 7.19999 2.23263 7.19999 3.99999C7.19999 5.76735 5.76735 7.19999 3.99999 7.19999Z"
                fill="#3FA1E3"
              />
            </g>
            <defs>
              <clipPath id="clip0_2307_4">
                <rect width="8" height="8" fill="white" />
              </clipPath>
            </defs>
          </svg>
          In Review
        </button>
      </div>

      <button
        className={`flex w-[270px] h-[32px] bg-[#EFF8FF] justify-center text-[#3FA1E3] items-center gap-[24px] rounded-md`}
        onClick={() => {
          setModelOpen(!modelOpen);
        }}
        s
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6.18573 5.31428V5.81428H6.68573H10.1143C10.1636 5.81428 10.2108 5.83385 10.2456 5.86868C10.2804 5.90351 10.3 5.95074 10.3 6C10.3 6.04925 10.2804 6.09649 10.2456 6.13132C10.2108 6.16614 10.1636 6.18571 10.1143 6.18571H6.68573H6.18573V6.68571V10.1143C6.18573 10.1635 6.16616 10.2108 6.13133 10.2456C6.0965 10.2804 6.04927 10.3 6.00001 10.3C5.95076 10.3 5.90352 10.2804 5.86869 10.2456C5.83386 10.2108 5.8143 10.1635 5.8143 10.1143V6.68571V6.18571H5.3143H1.88573C1.83647 6.18571 1.78923 6.16614 1.75441 6.13132C1.71958 6.09649 1.70001 6.04925 1.70001 6C1.70001 5.95074 1.71958 5.90351 1.75441 5.86868C1.78923 5.83385 1.83647 5.81428 1.88573 5.81428H5.3143H5.8143V5.31428V1.88571C5.8143 1.83646 5.83386 1.78922 5.86869 1.75439C5.90352 1.71956 5.95076 1.7 6.00001 1.7C6.04927 1.7 6.0965 1.71956 6.13133 1.75439C6.16616 1.78922 6.18573 1.83646 6.18573 1.88571V5.31428Z"
            fill="#3FA1E3"
            stroke="#3FA1E3"
          />
        </svg>
        Add New
      </button>
      {modelOpen && (
        <div className="z-50">
          <ModalBox setModelOpen={setModelOpen} modelOpen={modelOpen} />
        </div>
      )}
    </div>
  );
}

export default InReviewComponent;
