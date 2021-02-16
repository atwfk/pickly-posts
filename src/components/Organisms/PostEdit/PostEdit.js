import React, { useState } from "react";
import filled from "../../../img/large-avatar.png";
import PostType from "./components/PostType";
import { useDispatch } from "react-redux";
import { startPostCreator } from "../../../store/actions/posts";

const PostEdit = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const inputHandler = () => {
    setActive(true);
    dispatch(startPostCreator());
  };
  return (
    <div className="flex justify-center relative">
      <div className="misc-box bg-white shadow-soft rounded-md flex items-center p-m mb-10">
        <img src={filled} alt="filled avatar" className="w-10 mr-m" />
        <input
          className="hover:border-grey-shd2 focus:text-dark-grey focus:border-dark border border-grey-shd5 py-2.5 px-m text-sm font-normal text-grey-shd1 w-64 md:w-96 rounded-md focus:outline-none"
          type="text"
          placeholder="What do you want to ask about?"
          onClick={inputHandler}
          data-testid="inputField"
        />
      </div>
      {active ? (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-dark bg-opacity-50"
          onClick={() => setActive(false)}
        ></div>
      ) : null}
      <PostType active={active} />
    </div>
  );
};

export default PostEdit;
