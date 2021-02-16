import React from "react";
import PropTypes from "prop-types";
import filled from "../../img/large-avatar.png";
import anon from "../../img/large-anan.png";
import user from "../../img/large-notfilled.png";

const Button = (props) => {
  const { variant = "filled", size = "lg" } = props;
  return (
    <img
      className={`ml-4 mt-4 ${
        size === "md" ? "w-10" : size === "sm" ? "w-8" : "w-14"
      }`}
      src={variant === "user" ? user : variant === "anon" ? anon : filled}
      alt={variant === "user" ? "user" : variant === "anon" ? "anon" : "filled"}
    />
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["filled", "anon", "user"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
