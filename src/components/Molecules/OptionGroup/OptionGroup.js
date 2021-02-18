import React from "react";
import AddOption from "./components/AddOption";
import OptionGroupBox from "./components/OptionGroupBox";

const OptionGroup = (props) => {
  const { addOptionGroup, setAddOptionGroup } = props;
  const addOptionGroupHandler = () => {
    const numbers = "123456789";
    const randId = Math.floor(Math.random() * numbers);
    setAddOptionGroup([
      ...addOptionGroup,
      { id: randId, optionName: "", optionInpVals: [] },
    ]);
  };
  const removeOptionGroupHandler = (e) => {
    setAddOptionGroup(
      addOptionGroup.filter((box) => box.id.toString() !== e.target.id)
    );
  };
  const optionNameHandler = (e) => {
    setAddOptionGroup(
      addOptionGroup.map((optionGroup) => {
        if (e.target.id === optionGroup.id.toString()) {
          optionGroup.optionName = e.target.value;
        }
        return optionGroup;
      })
    );
  };

  return (
    <div className="flex flex-col">
      {addOptionGroup.map((box) => (
        <OptionGroupBox
          key={box.id}
          click={removeOptionGroupHandler}
          id={box.id}
          groupName={box.optionName}
          changed={optionNameHandler}
          addOptionGroup={addOptionGroup}
          setAddOptionGroup={setAddOptionGroup}
        />
      ))}
      <AddOption click={addOptionGroupHandler} />
    </div>
  );
};

export default OptionGroup;
