import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Progress = (props) => {
  const { progress, row = false, disabled = false } = props;
  const completeClass = classNames({
    "bg-error": progress < 50,
    "bg-primary": progress < 100,
    "bg-success": progress === 100,
  });
  return (
    <div
      className={`${completeClass} ${row ? "h-1" : "w-2"} rounded-full ${
        disabled ? "opacity-25" : ""
      }`}
      style={row ? { width: `${progress}%` } : { height: `${3 * progress}px` }}
    ></div>
  );
};

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  row: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Progress;
