import React, { useState, useEffect } from "react";
import AddOption from "./components/AddOption";
import OptionInput from "./components/OptionInput";
import { useDispatch } from "react-redux";
import { addFavoritesCreator } from "../../../store/actions/posts";

const TextDefault = () => {
  const [addOption, setAddOption] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    const options = [];
    addOption.map((option) => {
      options.push(option.value);
    });
    dispatch(addFavoritesCreator(options));
  }, [addOption]);
  // const alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  //  Alphabet letters
  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })();
  const addOptionHandler = () => {
    const numbers = "123456789";
    const randId = Math.floor(Math.random() * numbers);
    //alpha: alpha[id - 1]
    setAddOption([...addOption, { id: randId, value: "" }]);
  };
  const removeOptionHandler = (e) => {
    setAddOption(
      addOption.filter((item) => item.id.toString() !== e.target.id)
    );
  };
  const inputValHandler = (e) => {
    setAddOption(
      addOption.map((option) => {
        if (e.target.id === option.id.toString()) {
          option.value = e.target.value;
        }
        return option;
      })
    );
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
      <button onClick={() => console.log(addOption)}>Click Here</button>
    </div>
  );
};

export default TextDefault;
