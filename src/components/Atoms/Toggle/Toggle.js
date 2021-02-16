import React, { useState } from "react";
import PropTypes from "prop-types";

const Toggle = (props) => {
  const { size = "lg", disabled } = props;
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={`${size === "md" ? "w-7 h-4" : "w-10 h-6"} rounded-full ${
        checked ? "bg-primary-shd7" : "bg-grey-shd4"
      } flex items-center px-1 cursor-pointer ${
        checked ? "hover:bg-primary-shd6" : "hover:bg-grey-shd3"
      }  transition duration-100 ease-out ${
        disabled ? "pointer-events-none opacity-25" : ""
      }`}
      onClick={() => setChecked(!checked)}
    >
      <div
        className={`${
          checked
            ? `bg-primary transform ${
                size === "md" ? "translate-x-2.5" : "translate-x-4"
              }`
            : "bg-white"
        } ${
          size === "md" ? "w-3 h-3" : "w-4 h-4"
        } rounded-full transition-all duration-500 ease-in-out`}
      ></div>
    </div>
  );
};

Toggle.propTypes = {
  checked: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["md", "lg"]),
};

export default Toggle;
