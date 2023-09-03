import React, { FC } from "react";

interface SVGProps {
  className?: string;
  fill?: string;
}

export const ChevronLeft: FC<SVGProps> = ({ className }) => {
  return (
      <svg
          className={`${className} rounded-xl bg-slate-100 hover:bg-green-600 hover:text-slate-100`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                  d="M15 6L9 12L15 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              ></path>{" "}
          </g>
      </svg>
  );
};
export const ChevronRight: FC<SVGProps> = ({ className }) => {
  return (
      <svg
          className={`${className} rounded-xl bg-slate-100 hover:!bg-green-600 hover:!text-white`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
              <path
                  d="M9 6L15 12L9 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              ></path>
          </g>
      </svg>
  );
};
