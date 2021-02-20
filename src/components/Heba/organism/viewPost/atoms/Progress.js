import React from "react";
import PropTypes from "prop-types";

const Progress = (props) => {
  const { progress, row = false, disabled = false } = props;
  let completeClass =
    progress < 50 ? "error" : progress < 100 ? "primary" : "success";
  return (
    <>
    
    <div
      className={`bg-${completeClass} ${row ? "h-1" : "w-2"} rounded-full ${
        disabled ? "opacity-25" : ""
      }`}
      style={row ? { width: `${progress}%` } : { height: `${3 * progress}px` }}
    ></div>
    </>
  );
};

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  row: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Progress;
