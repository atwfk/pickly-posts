import React from "react";

const AddOption = ({ click }) => {
  return (
    <div className="misc-box flex items-center bg-grey-bg p-m rounded-md">
      <svg
        className="mr-xxs cursor-pointer"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={click}
      >
        <path
          d="M12.6668 7.3335H8.66683V3.3335H7.3335V7.3335H3.3335V8.66683H7.3335V12.6668H8.66683V8.66683H12.6668V7.3335Z"
          fill="#5B6366"
        />
      </svg>
      <h3 className="font-medium text-sm text-dark-grey">Add Option Group</h3>
    </div>
  );
};

export default AddOption;
