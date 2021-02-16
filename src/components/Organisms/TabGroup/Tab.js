import React from "react";

const Tab = ({ active, click, svg, children }) => {
  return (
    <div
      className={`cursor-pointer mr-m flex items-center ${
        active ? "bg-transparent md:bg-white border border-grey" : "bg-grey-bg"
      } py-1.5 px-3.5 rounded-full`}
      onClick={click}
      data-testid="tab"
      title={active ? "checkedTab" : null}
    >
      <label className="relative mr-xs">
        <input type="radio" className="w-0 h-0 opacity-0 absolute" />
        <div
          className={`cursor-pointer rounded-full bg-white w-4 h-4 ${
            active
              ? "border-4 border-primary hover:border-primary"
              : "border border-grey-shd4 hover:border-grey-shd1"
          }`}
        ></div>
      </label>
      {svg}
      <span className="text-sm hidden xl:inline-block font-medium text-dark-grey">
        {children}
      </span>
    </div>
  );
};

export default Tab;
