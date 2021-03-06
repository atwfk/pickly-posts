import React from "react";
import styled from "styled-components";

const ImageUpload = ({ changed }) => {
  return (
    <StyledInputFile>
      <input
        type="file"
        name="file"
        id="file"
        className="opacity-0 overflow-hidden absolute"
        multiple
        onChange={changed}
      />
      <label
        htmlFor="file"
        className="bg-grey-shd7 border border-dashed rounded-md border-accent cursor-pointer hover:text-accent text-accent text-sm font-medium w-full h-14 flex items-center justify-center"
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.16683 3.33333H11.8335V8H13.1668V3.33333C13.1668 2.598 12.5688 2 11.8335 2H3.16683C2.4315 2 1.8335 2.598 1.8335 3.33333V11.3333C1.8335 12.0687 2.4315 12.6667 3.16683 12.6667H8.50016V11.3333H3.16683V3.33333Z"
            fill="#00A8E8"
          ></path>
          <path
            d="M5.8335 7.33333L3.8335 10H11.1668L8.50016 6L6.50016 8.66667L5.8335 7.33333Z"
            fill="#00A8E8"
          ></path>
          <path
            d="M13.1668 9.33333H11.8335V11.3333H9.8335V12.6667H11.8335V14.6667H13.1668V12.6667H15.1668V11.3333H13.1668V9.33333Z"
            fill="#00A8E8"
          ></path>
        </svg>
        Upload one or multiple images
      </label>
    </StyledInputFile>
  );
};

const StyledInputFile = styled.div`
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    z-index: 1;
  }
`;

export default ImageUpload;
