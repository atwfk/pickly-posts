import React from "react";
import Header from "./viewPost/atoms/Header";
import MiniSurveyResult from "./viewPost/atoms/MiniSurveyResult";
import Footer from "./viewPost/atoms/Footer";

function ViewMiniSurveyٌResult() {
    return (
        <div className="flex items-center flex-wrap w-4/2 flex-col">
        <div className=" bg-white shadow-soft rounded-md flex flex-col items-center p-m mb-10">
          <Header />
          <MiniSurveyResult />
          <Footer />
        </div>
      </div>
    )
}

export default ViewMiniSurveyٌResult
