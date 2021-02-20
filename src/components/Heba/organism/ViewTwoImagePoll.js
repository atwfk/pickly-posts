import React from "react";
import Header from "./viewPost/atoms/Header";
import TwoImage from "./viewPost/atoms/TwoImage";
import Footer from "./viewPost/atoms/Footer";

const ViewTwoImagePoll = () => {
  return (
    <div className="flex items-center flex-wrap w-4/2 flex-col">
      <div className=" bg-white shadow-soft rounded-md flex flex-col items-center p-m mb-10">
        <Header />
        <TwoImage />
        <Footer />
      </div>
    </div>
  );
};

export default ViewTwoImagePoll;
