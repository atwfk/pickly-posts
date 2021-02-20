import React from "react";
import Header from "./viewPost/atoms/Header";
import FourImagesReault from "./viewPost/atoms/FourImagsResults";
import Footer from "./viewPost/atoms/Footer";
const ViewFourImagePollResult = () => {
  return (
    <div className="flex items-center flex-wrap w-4/2 flex-col">
      <div className=" bg-white shadow-soft rounded-md flex flex-col items-center p-m mb-10">
        <Header />
        <FourImagesReault />
        <Footer />
      </div>
    </div>
  );
};

export default ViewFourImagePollResult;