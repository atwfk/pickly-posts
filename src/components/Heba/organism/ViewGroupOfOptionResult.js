import React from "react";
import Header from "./viewPost/atoms/Header";
import GroupOfOptionResult from "./viewPost/atoms/GroupOfOptionResult";
import Footer from "./viewPost/atoms/Footer";
const ViewGroupOfOptionResult = () => {
  return (
    <div className="flex items-center flex-wrap w-4/2 flex-col">
      <div className=" bg-white shadow-soft rounded-md flex flex-col items-center p-m mb-10">
        <Header />
        <GroupOfOptionResult />
        <Footer />
      </div>
    </div>
  );
};

export default ViewGroupOfOptionResult;