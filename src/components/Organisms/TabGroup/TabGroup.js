import React from "react";
import Tab from "./Tab";

const TabGroup = ({ data, setData }) => {
  const toggleActiveHandler = (index) => {
    setData(
      data.map((item, i) => {
        if (i === index) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      })
    );
  };
  return (
    <div className="flex items-center">
      {data
        ? data.map((item, index) => (
            <Tab
              click={() => toggleActiveHandler(index)}
              key={index}
              svg={item.icon}
              active={item.active}
            >
              {item.content}
            </Tab>
          ))
        : null}
    </div>
  );
};

export default TabGroup;
