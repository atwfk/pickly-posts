import React, { useState } from "react";
import AddOption from "./components/AddOption";
import OptionInput from "./components/OptionInput";

const TextDefault = (props) => {
  const [addOption, setAddOption] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);
  const { setTextInputs, addOptionGroup, setAddOptionGroup, optionBox } = props;
  // const alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  //  Alphabet letters
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  const addOptionHandler = () => {
    const numbers = "123456789";
    const randId = Math.floor(Math.random() * numbers);
    setAddOption([...addOption, { id: randId, value: "" }]);
  };
  const removeOptionHandler = (e) => {
    setAddOption(
      addOption.filter((item) => item.id.toString() !== e.target.id)
    );
  };
  const inputValHandler = (e) => {
    let inpuVals = [];
    setAddOption(
      addOption.map((option) => {
        if (e.target.id === option.id.toString()) {
          option.value = e.target.value;
        }
        inpuVals.push(option.value);
        return option;
      })
    );
    if (setTextInputs) {
      setTextInputs(addOption);
    }
    if (setAddOptionGroup) {
      setAddOptionGroup(
        addOptionGroup.map((optionGroup) => {
          if (optionGroup.id == optionBox.current.id) {
            optionGroup.optionInpVals = inpuVals;
          }
          return optionGroup;
        })
      );
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full">
        {addOption.map((item, index) => {
          const letter = letters[index];
          return (
            <OptionInput
              key={item.id}
              id={item.id}
              alpha={letter}
              click={removeOptionHandler}
              index={index}
              addOption={addOption}
              changed={inputValHandler}
            />
          );
        })}
      </div>
      <AddOption click={addOptionHandler} />
    </div>
  );
};

export default TextDefault;
