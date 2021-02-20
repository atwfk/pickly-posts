import React from "react";
import Header from "./viewPost/atoms/Header";
import OneImage from "./viewPost/atoms/OneImage";
import Footer from "./viewPost/atoms/Footer";
const ViewOneImagePollResult = () => {
  return (
    <div className="flex items-center flex-wrap w-4/2 flex-col">
      <div className=" bg-white shadow-soft rounded-md flex flex-col items-center p-m mb-10">
        <Header />
        <OneImage casePost="result"/>
        <Footer footerContent="120 Voters"/>
      </div>
    </div>
  );
};

export default ViewOneImagePollResult;
