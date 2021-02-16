import React, { useState } from "react";
import AddOption from "./components/AddOption";
import OptionGroupBox from "./components/OptionGroupBox";

const OptionGroup = () => {
  const [addOptionGroup, setAddOptionGroup] = useState([{ id: 1 }]);
  const addOptionGroupHandler = () => {
    const numbers = "123456789";
    const randId = Math.floor(Math.random() * numbers);
    setAddOptionGroup([...addOptionGroup, { id: randId }]);
  };
  const removeOptionGroupHandler = (e) => {
    setAddOptionGroup(
      addOptionGroup.filter((box) => box.id.toString() !== e.target.id)
    );
  };
  return (
    <div className="flex flex-col">
      {addOptionGroup.map((box) => (
        <OptionGroupBox
          key={box.id}
          click={removeOptionGroupHandler}
          id={box.id}
        />
      ))}
      <AddOption click={addOptionGroupHandler} />
    </div>
  );
};

export default OptionGroup;
