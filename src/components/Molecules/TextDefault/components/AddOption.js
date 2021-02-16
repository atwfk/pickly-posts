import React from "react";

const AddOption = ({ click }) => {
  return (
    <div className="flex items-center mt-xs w-full">
      <svg
        className="mr-s cursor-pointer"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={click}
      >
        <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z" fill="#00A8E8" />
        <path
          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
          fill="#00A8E8"
        />
      </svg>
      <div className="relative w-full">
        <input
          className="hover:border-grey-shd2 focus:text-dark-grey focus:border-dark border border-accent placeholder-accent bg-accent-shd7 bg-opacity-10 py-2.5 px-m text-sm font-normal text-accent w-full rounded-md focus:outline-none"
          type="text"
          placeholder="Add option"
        />
      </div>
    </div>
  );
};

export default AddOption;
