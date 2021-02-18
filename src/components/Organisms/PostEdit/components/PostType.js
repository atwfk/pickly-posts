import React, { useState } from "react";
import TabGroup from "../../TabGroup/TabGroup";
import filled from "../../../../img/large-avatar.png";
import Toggle from "../../../Atoms/Toggle/Toggle";
import { tabGroupData } from "../../TabGroup/data";
import { useDispatch } from "react-redux";
import { addPostCreator } from "../../../../store/actions/posts";
import OptionGroup from "../../../Molecules/OptionGroup/OptionGroup";
import ImagePoll from "./ImagePoll";
import TextDefault from "../../../Molecules/TextDefault/TextDefault";
import { addFavoritesCreator } from "../../../../store/actions/posts";

const PostType = ({ active }) => {
  const [data, setData] = useState(tabGroupData());
  const [inputVal, setInputVal] = useState("");
  const [textInputs, setTextInputs] = useState([]);
  const [addOptionGroup, setAddOptionGroup] = useState([
    { id: 1, optionName: "", optionInpVals: null },
  ]);
  const dispatch = useDispatch();
  const addPost = () => {
    let postType = "";
    data.map((item) => {
      if (item.active === true) {
        postType = item.content;
      }
      return item;
    });
    let options = [];
    if (textInputs) {
      textInputs.map((option) => {
        options.push(option.value);
        return option;
      });
    }
    dispatch(addFavoritesCreator(options));
    dispatch(addPostCreator(postType, inputVal, addOptionGroup));
    setAddOptionGroup([]);
    setInputVal("");
    options = [];
    setTextInputs([]);
  };
  return (
    <div
      className={`flex flex-col z-10 absolute left-1/2 transform -translate-x-2/4 ${
        active ? "-translate-y-0.5 top-1/2" : "-translate-y-full bottom-1/2"
      } transition-all duration-200 ease-out`}
      data-testid="postType"
    >
      <div className="md:bg-white md:shadow-soft rounded-t-md border-b border-grey-shd6 flex flex-col p-m">
        <div className="mb-m flex items-center">
          <img src={filled} alt="filled avatar" className="w-10 mr-m" />
          <TabGroup data={data} setData={setData} />
        </div>
        <div className="mb-m">
          <input
            className="hover:border-grey-shd2 focus:text-dark-grey focus:border-dark border border-grey-shd5 bg-transparent md:bg-white py-2.5 px-m text-sm font-normal text-grey-shd1 w-full rounded-md focus:outline-none"
            type="text"
            placeholder="What do you want to ask about?"
            onChange={(e) => setInputVal(e.target.value)}
          />
        </div>
        {data.map((tab, i) => {
          if (tab.active) {
            switch (tab.content) {
              case "Image Poll":
                return <ImagePoll key={i} />;
              case "Text Poll":
                return <TextDefault key={i} setTextInputs={setTextInputs} />;
              case "Mini survey":
                return (
                  <OptionGroup
                    key={i}
                    addOptionGroup={addOptionGroup}
                    setAddOptionGroup={setAddOptionGroup}
                  />
                );
              default:
                return tab;
            }
          }
          return true;
        })}
        <div className="h-32 md:hidden w-full bg-transparent"></div>
      </div>
      <div className="md:bg-white md:shadow-soft md:rounded-b-md border-b border-grey-shd6 md:border-none flex p-m md:mb-10">
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Toggle size="md" />
            <p className="ml-xs text-xs text-dark-grey font-normal">
              Hide my identity <span className="text-grey-shd6 ml-m">|</span>
              <span className="ml-m">Privacy:</span>
              <span className="ml-xs text-sm font-medium">Public</span>
            </p>
            <svg
              className="ml-xxs"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.862 6.19534L7.99998 9.05734L5.13798 6.19534L4.19531 7.13801L7.99998 10.9427L11.8046 7.13801L10.862 6.19534Z"
                fill="#5B6366"
              ></path>
            </svg>
          </div>
          <button
            className="text-sm hidden md:inline-block font-medium text-white bg-primary py-1.5 px-m rounded-full"
            onClick={addPost}
          >
            Post
          </button>
        </div>
      </div>
      <div className="flex md:hidden p-m mb-10 w-full justify-between">
        <button className="bg-white text-error text-sm font-medium py-1.5 px-xl rounded-full">
          Cancel
        </button>
        <button className="bg-primary opacity-25 pointer-events-none text-white font-medium text-sm py-1.5 px-24 rounded-full">
          Post
        </button>
      </div>
    </div>
  );
};

export default PostType;
