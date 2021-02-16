import React, { useState } from "react";
import TextDefault from "../../TextDefault/TextDefault";

const OptionGroupBox = ({ click, id }) => {
  const [inputData, setInputData] = useState("");
  const [inputChecked, setInputChecked] = useState(false);
  return (
    <div className="misc-box flex flex-col bg-grey-bg p-m mb-xs rounded-md">
      <div className="flex items-center justify-between mb-m">
        <input
          className={`font-normal text-sm text-dark placeholder-dark focus:outline-none bg-accent-shd7 ${
            inputChecked ? "hidden" : "inline-block"
          }`}
          type="text"
          placeholder="Typing a new group name here|"
          onChange={(e) => setInputData(e.target.value)}
        />
        <h3
          className={`font-normal text-sm text-dark-grey ${
            inputChecked ? "inline-block" : "hidden"
          }`}
        >
          {inputData}
        </h3>
        <svg
          className={`${inputChecked ? "inline-block" : "hidden"}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99984 6.6665C7.2665 6.6665 6.6665 7.2665 6.6665 7.99984C6.6665 8.73317 7.2665 9.33317 7.99984 9.33317C8.73317 9.33317 9.33317 8.73317 9.33317 7.99984C9.33317 7.2665 8.73317 6.6665 7.99984 6.6665ZM7.99984 2.6665C7.2665 2.6665 6.6665 3.2665 6.6665 3.99984C6.6665 4.73317 7.2665 5.33317 7.99984 5.33317C8.73317 5.33317 9.33317 4.73317 9.33317 3.99984C9.33317 3.2665 8.73317 2.6665 7.99984 2.6665ZM7.99984 10.6665C7.2665 10.6665 6.6665 11.2665 6.6665 11.9998C6.6665 12.7332 7.2665 13.3332 7.99984 13.3332C8.73317 13.3332 9.33317 12.7332 9.33317 11.9998C9.33317 11.2665 8.73317 10.6665 7.99984 10.6665Z"
            fill="#5B6366"
          />
        </svg>
        <div className={`${inputChecked ? "hidden" : "flex"}`}>
          <svg
            className="mr-xs cursor-pointer"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={click}
            id={id}
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
              fill="#FFE9E8"
              onClick={click}
              id={id}
            />
            <path
              d="M9.86293 5.48633L7.97716 7.37166L6.09182 5.48633L5.46338 6.11477L7.34871 8.00011L5.46338 9.88544L6.09182 10.5139L7.97716 8.62855L9.86293 10.5139L10.4914 9.88544L8.60605 8.00011L10.4914 6.11477L9.86293 5.48633Z"
              fill="#FE544A"
              onClick={click}
              id={id}
            />
          </svg>
          <svg
            className="cursor-pointer"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setInputChecked(true)}
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
              fill="#D8FDE9"
              onClick={() => setInputChecked(true)}
            />
            <path
              d="M7.11104 9.59349L5.64749 8.12994L5.01904 8.75838L7.11104 10.8504L11.4253 6.53616L10.7968 5.90771L7.11104 9.59349Z"
              fill="#07B255"
              onClick={() => setInputChecked(true)}
            />
          </svg>
        </div>
      </div>
      <TextDefault />
    </div>
  );
};

export default OptionGroupBox;
