import React from "react";
import postMan from "../../../../../img/post-img.jpg";
import Progress from "./Progress";
function TwoImagePollResult(props) {
  const {
    titleOfPost = "which one is better?",
    captionOfImage = "any caption",
  } = props;
  return (
    <>
      <div className="mb-m w-full">
        <h3 className="text-md text-dark font-normal">{titleOfPost}</h3>
      </div>
      <div className=" grid gap-x-2 gap-y-4 mb-m rounded-md relative">
        <div className=" flex flex-col mb-m relative rounded-md overflow-hidden md:flex-row gap-2">
          <div className=" relative rounded-md overflow-hidden">
            <img src={postMan} alt="post" className=" relative md:w-72" width="200px" />
            <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
              {captionOfImage}
            </div>
            <div class="absolute bottom-4 right-4 flex">
                <div class="flex items-start">
                  <p class="bg-white py-xxs px-xsvv rounded-tl-md rounded-bl-md">
                   {25}%
                  </p>
                  <div class="bg-white p-xxs rounded-tr-md rounded-br-md rounded-bl-md">
                <Progress progress={25} />
                  </div>
                </div>
            </div>
          </div>
          <div className="  relative rounded-md overflow-hidden">
            <img src={postMan} alt="post" className=" md:w-72" width="200px" />
            <div className="font-normal text-sm hidden text-dark md:flex items-center py-xxsv px-xsvv bg-white bg-opacity-40 rounded-sm absolute bottom-4 left-4">
              {captionOfImage}
            </div>
           
             
              <div class="absolute bottom-4 right-4 flex">
                <div class="flex items-start">
                  <p class="bg-white py-xxs px-xsvv rounded-tl-md rounded-bl-md">
                   {75}%
                  </p>
                  <div class="bg-white p-xxs rounded-tr-md rounded-br-md rounded-bl-md">
                <Progress progress={75} />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoImagePollResult;
