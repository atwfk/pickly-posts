import React from "react";
import Header from "./viewPost/atoms/Header";
import OptionOfGroup from "./viewPost/atoms/OptionOfGroup";
import Footer from "./viewPost/atoms/Footer";
const ViewOptionOfGroup = ({numOFOptions}) => {
  return (
    <div className="flex items-center flex-wrap w-4/2 flex-col">
      <div className=" bg-white shadow-soft rounded-md flex flex-col items-center p-m mb-10">
        <Header />
        <OptionOfGroup numOFOptions={numOFOptions}/>
        <Footer footerContent="120 Voters"/>
      </div>
    </div>
  );
};
export default ViewOptionOfGroup;